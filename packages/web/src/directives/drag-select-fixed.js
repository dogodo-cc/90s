// 遇到的问题笔记：
// 没有设置 pointer-events: none; 的时候，拖选框会影响触发 mouseup 事件，因为它是fixed布局，刚好挡在鼠标下面
// getBoundingClientRect() 得到的是元素相对于窗口的位置，很有用，配合 event.clientX
// [].sort() 如果不写回调函数，默认排序顺序是在将元素转换为字符串，然后比较它们的UTF-16代码单元值序列时构建的，不是进行数值大小对比


// 拖选框的默认样式
const defaultStyle = 'position: fixed;border:1px solid blue;background-color: rgba(255, 255, 255, .4);pointer-events: none;';

// 拖选框的动态样式
const getSelectRectanglePosition = (clientXStart,clientYStart, clientXEnd, clientYEnd, winWidth, winHeight) => {
  let top = 0;
  let bottom = 0;
  let right = 0;
  let left = 0;
  if (clientXEnd > clientXStart) {
    left = clientXStart;
    right = winWidth - clientXEnd;
  } else {
    left = clientXEnd;
    right = winWidth - clientXStart;
  }

  if (clientYEnd > clientYStart) {
    top = clientYStart;
    bottom = winHeight - clientYEnd;
  } else {
    top = clientYEnd;
    bottom = winHeight - clientYStart;
  }
  return `${defaultStyle}left: ${left + 'px'};right: ${right + 'px'};top: ${top + 'px'};bottom: ${bottom + 'px'};`
}

// 计算当前每个子元素的位置信息
const getchildPosition = (el, className = 'item') => {
  const childrens = el.getElementsByClassName(className);
  const result = Array.from(childrens).map(item => {
    const {left, top, width, height} = item.getBoundingClientRect();
    const axisX = getAxisArray(left, width);
    const axisY = getAxisArray(top, height);
    return {axisX, axisY};
  })
  return result;
}

// 得到坐标轴数组
const getAxisArray = (start, len) => {
  let result = [start];
  while(len) {
    len--;
    result.push(++start);
  }
  return result;
}

// 判断是否在中间
const justInMiddle = (start,val,end) => {
  const line = [start, val, end].sort((a,b) => a-b);
  return line[1] === val;
}


export default {
  bind(el, binding) {
    let selectRectangle;
  
    let clientXStart = 0;
    let clientYStart = 0;

    let winWidth;
    let winHeight;

    // 子元素的位置信息
    let childrensPosition = [];

    // 用于前后对比，避免重复触发回调事件
    let selected = ''; 

    // mousedown
    el.addEventListener('mousedown', event => {
      // 点击的时候获取一次 innerWidth 省去监听 resize 事件
      const {innerWidth, innerHeight} = window;
      winWidth = innerWidth;
      winHeight = innerHeight;

      // 点击的时候获取一次 避免因为页面滚动，位置信息更新导致计算不准确的bug
      childrensPosition = getchildPosition(el, binding.arg);

      // 点击 清空上次的选择
      binding.value && binding.value([]);

      const {clientX, clientY} = event;
      clientXStart = clientX;
      clientYStart = clientY;

      el.dataset.isDraging = true;
      selectRectangle = document.createElement('div');
      selectRectangle.style.cssText = `left:${clientXStart + 'px'};top:${clientYStart + 'px'};${defaultStyle}`
      document.body.appendChild(selectRectangle);
    }, false);

    // mousemove
    el.addEventListener('mousemove', event => {
      event.preventDefault();
      const isDraging = el.dataset.isDraging === 'true';
      if (isDraging) {
        const {clientX, clientY} = event;        
        selectRectangle.style.cssText = getSelectRectanglePosition(clientXStart, clientYStart, clientX, clientY, winWidth, winHeight);

        // 判断哪些项目被选中
        const newSelected = childrensPosition.map((child, index) => {
          const {axisX, axisY} = child;
          
          const isAcrossX = axisX.some(x => justInMiddle(clientXStart, x, clientX));
          const isAcrossY = axisY.some(y => justInMiddle(clientYStart, y, clientY));
          if (isAcrossX && isAcrossY) {
            return index;
          }
          return false;
        }).filter(v => v!==false);

        if(newSelected.toString() === selected) {
          // do nothing
        } else {
          selected = newSelected.toString();
          binding.value && binding.value(newSelected);
        }
      }
    }, false);

    // mouseup
    el.addEventListener('mouseup',() => {
      el.dataset.isDraging = false;
      document.body.removeChild(selectRectangle);
    }, false);
  },
}