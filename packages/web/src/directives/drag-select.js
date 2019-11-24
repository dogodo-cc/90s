// 遇到的问题笔记：
// 没有设置 pointer-events: none; 的时候，拖选框会影响触发 mouseup 事件，因为它是fixed布局，刚好挡在鼠标下面
// offsetLeft 相对于被定位的父元素的距离
// [].sort() 如果不写回调函数，默认排序顺序是在将元素转换为字符串，然后比较它们的UTF-16代码单元值序列时构建的，不是进行数值大小对比


// 拖选框的默认样式
const defaultStyle = 'position: absolute;border:1px solid blue;background-color: rgba(255, 255, 255, .4);pointer-events: none;';

// 拖选框的动态样式
const getSelectRectanglePosition = (offsetXStart,offsetYStart, offsetXEnd, offsetYEnd) => {
  const left = Math.min(offsetXStart, offsetXEnd);
  const top = Math.min(offsetYStart, offsetYEnd);
  const width = Math.abs(offsetXEnd - offsetXStart);
  const height = Math.abs(offsetYEnd - offsetYStart);
  return `${defaultStyle}left:${left + 'px'};top:${top + 'px'};width: ${width + 'px'};height: ${height + 'px'};`
}

// 计算当前每个子元素的位置信息
const getchildPosition = (el, className = 'item') => {
  const childrens = el.getElementsByClassName(className);
  const result = Array.from(childrens).map(item => {
    const {offsetLeft, offsetTop, offsetWidth, offsetHeight} = item;
    const axisX = getAxisArray(offsetLeft, offsetWidth);
    const axisY = getAxisArray(offsetTop, offsetHeight);
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
  
    let offsetXStart = 0;
    let offsetYStart = 0;

    // 子元素的位置信息
    let childrensPosition = [];

    // 用于前后对比，避免重复触发回调事件
    let selected = '';

    el.style.position = 'relative';

    // mousedown
    el.addEventListener('mousedown', event => {
      childrensPosition = getchildPosition(el, binding.arg);
      // 点击 清空上次的选择
      binding.value && binding.value([]);

      const {offsetX, offsetY} = event;
      const {scrollTop} = el;

      offsetXStart = offsetX;
      offsetYStart = offsetY + scrollTop;
      // console.log(offsetXStart, offsetYStart)

     

      el.dataset.isDraging = true;
      if (selectRectangle) {
        selectRectangle.parentNode && selectRectangle.parentNode.removeChild(selectRectangle);
      } else {
        selectRectangle = document.createElement('div');
      }
      selectRectangle.style.cssText = `${defaultStyle}left:${offsetXStart + 'px'};top:${offsetYStart + 'px'};`
      el.appendChild(selectRectangle);
    }, false);

    // mousemove
    el.addEventListener('mousemove', event => {
      event.preventDefault();
      const isDraging = el.dataset.isDraging === 'true';
      if (isDraging) {
        let {offsetX, offsetY} = event;
        const {scrollTop} = el;
        offsetY += scrollTop;   
        selectRectangle.style.cssText = getSelectRectanglePosition(offsetXStart, offsetYStart, offsetX, offsetY);

        // 判断哪些项目被选中
        const newSelected = childrensPosition.map((child, index) => {
          const {axisX, axisY} = child;
          
          const isAcrossX = axisX.some(x => justInMiddle(offsetXStart, x, offsetX));
          const isAcrossY = axisY.some(y => justInMiddle(offsetYStart, y, offsetY));
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
      el.removeChild(selectRectangle);
    }, false);
  },
  inserted() {
  }
}