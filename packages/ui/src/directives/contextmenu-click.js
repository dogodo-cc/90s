let contextBox = null;
const contextBoxStyleDefault = 'position: fixed;z-index: 1000;background-color: #fff;border-radius: 4px;box-shadow:0px 2px 12px 0px rgba(0,0,0,0.06);';
const scrollOff = (e = window.event) => {
  e.preventDefault();
  e.stopPropagation();
  return false;
};
const removeNode = (node = contextBox) => {
  node &&
    node.parentNode &&
    node.parentNode.removeChild(node);
  document.removeEventListener('wheel', scrollOff, false);
};

export default {
  bind(el, binding) {
    // 获取指令参数
    const { cb, options, width, height, tip } = binding.value;

    if(!options.length) return;

    el.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      event.stopPropagation();

      removeNode(contextBox);
      contextBox = document.createElement('div');
      contextBox.className = 'contextmenu';
      let $header = document.createElement('div');
      $header.className = 'contextmenu-header';
      $header.innerText = tip || '移动到...';
      let $list = document.createElement('ul');
      $list.className = 'contextmenu-list';
      options.forEach(v => {
        const $li = document.createElement('li');
        $li.innerText = v.name;
        $li.dataset.value = v.value;
        $list.appendChild($li);
      });
      contextBox.appendChild($header);
      contextBox.appendChild($list);

      // 点击选项
      contextBox.addEventListener('click', e => {
        e.stopPropagation();
        const { value } = e.target.dataset;
        if (value) {
          cb(el, +value || value);
          removeNode();
        }
      }, false);

      // 样式
      let contextBoxStyle = contextBoxStyleDefault;
      const boxWidth = width || 160;
      contextBoxStyle += `width: ${boxWidth}px;`;
      if (height) {
        contextBoxStyle += `height: ${height}px;`;
      }
      contextBox.style.cssText = contextBoxStyle; // 为了计算 offsetWidth offsetHeight
      document.body.appendChild(contextBox);

      // 位置
      const { offsetWidth, offsetHeight } = contextBox;
      const { innerWidth, innerHeight } = window;
      const { clientX, clientY } = event;

      if (clientX + offsetWidth < innerWidth) {
        contextBoxStyle += `left: ${clientX}px;`;
      } else {
        contextBoxStyle += `right: ${innerWidth - clientX}px;`;
      }

      if (clientY + offsetHeight < innerHeight) {
        contextBoxStyle += `top: ${clientY}px;`;
      } else {
        contextBoxStyle += `bottom: ${innerHeight - clientY}px;`;
      }

      contextBox.style.cssText = contextBoxStyle;

      // 禁止滚动 wheel DOM level 3
      document.addEventListener('wheel', scrollOff, { passive: false });
    });

    // 点击自己也要收起菜单栏
    el.addEventListener('click', () => {
      removeNode();
    });

    // 点击文档收起菜单栏
    document.addEventListener('click', () => {
      removeNode(contextBox);
    }, false);
  },
  unbind() {
    document.removeEventListener('click', () => {
      removeNode(contextBox);
    }, false);
  }
}
;
