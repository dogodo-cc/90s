# MUI 开发笔记

> *把开发MUI项目的心得笔记都集合在这里，方便自己及团队成员少走弯路。*

[dcloud 文档中心](http://ask.dcloud.net.cn/docs/?_blank)

[新手入门](http://dev.dcloud.net.cn/mui/getting-started/?_blank)

[MUI 文档](http://dev.dcloud.net.cn/mui/ui/?_blank)

[HTML5+ API](http://www.html5plus.org/doc/h5p.html?_blank)

[nativeJs 文档](http://ask.dcloud.net.cn/article/88?_blank)

[Manifest.json 文档说明](http://ask.dcloud.net.cn/article/94?_blank)

## MUI 开发入门注意事项

- 固定栏靠前
- 一切内容都要包裹在mui-content中
- 始终为button按钮添加type属性
- 页面初始化：必须执行mui.init方法
- 页面跳转：抛弃href跳转
- 页面关闭：勿重复监听backbutton
- 点击：忘记click
```
$('.className')[0].addEventListener('tap',function(){
    //点击响应逻辑
});
```

## 页面传值

### 页面初始化时，通过扩展参数传值；(页面未创建)
例如：在首页中打开关于页面时，传递当前产品名称及版本号，然后在关于页面中读取这两个参数并显示出来；

首页实现代码：
```javascript
mui.openWindow({
    url:'info.html',
    id:'info.html',
    extras:{
        name:'mui',
        version:'0.5.8'
    }
});
```
关于页面实现代码：
```javascript
var self = plus.webview.currentWebview();
var name = self.name;
var version = self.version;
```
### 页面已创建，通过自定义事件传值 

#### 触发自定义事件
```javascript
mui.fire('目标页面','customEvent',{
    id:id
  });
```

#### 监听自定义事件 
```javascript
window.addEventListener('customEvent',function(event){
  //通过event.detail可获得传递过来的参数内容
 
});
```

完整案例代码：

*列表页面*
```javascript
//初始化预加载详情页面
mui.init({
  preloadPages:[{
    id:'detail.html',
    url:'detail.html'           
  }
  ]
});

var detailPage = null;
//添加列表项的点击事件
mui('.mui-content').on('tap', 'a', function(e) {
  var id = this.getAttribute('id');
  //获得详情页面
  if(!detailPage){
    detailPage = plus.webview.getWebviewById('detail.html'); // 前面预先加载的详情页
  }
  //触发详情页面的newsId事件
  mui.fire(detailPage,'newsId',{
    id:id
  });
//打开详情页面          
  mui.openWindow({
    id:'detail.html'
  });
});  
```
*详情页*
目标webview必须触发loaded事件后才能使用自定义事件
```javascript
//添加newId自定义事件监听
window.addEventListener('newsId',function(event){
  //获得事件参数
  var id = event.detail.id;
  //根据id向服务器请求新闻详情
  .....
});
```



## MUI 源码解读笔记

### 通过 `$` 获取的DOM

通过 `$` 获取的DOM，都是一个数组，哪怕你使用 `$('#id')` 获取的元素。所以如果需要使用
DOM 对象的原生方法，需要 `$('#id')[0]` 来转为原生DOM 使用。
```
$('.className').classList.add('aaa');  // 报错
$('.className')[0].classList.add('aaa'); // 正确

```
而如果需要使用 MUI 自己分装的方法，则只能通过 `$` 去获取DOM
```
$('.className').on('tap','.a',function(){
    //点击响应逻辑
});
```

MUI 的`on`,`off` 只适用在事件代理，不支持对当前元素绑定事件。如果是对当前元素，只能使用`addEventListener`。

### 沉浸式
[官方文档](http://ask.dcloud.net.cn/article/12622)

沉浸式状态不支持动态设置，属于应用级的。此类参数信息，通常在manifest.json中配置。

manifest.json->plus节点下
```
"statusbar": {
    "immersed": true //开启沉浸式状态栏
}
```

设置Webview的状态栏颜色

无论是launchwebview还是secondwebview，都是在manifest.json中配置相关的参数信息。

manifest.json->plus->launchwebview

```
"launchwebview": {
    "statusbar": {
        "background": "#FF3333"
    }
}
```


`helloH5+` 示例的源码里有一个叫`immersed.js` 的文件,它将计算出来的沉浸栏的高度挂在了 `window` 上。
```javascript
w.immersed=immersed;
```
所以如果在项目里需要用到沉浸式的高度，可用 `window.immersed` 获得。

### 底部固定的元素会被软键盘撑起

因为弹出软键盘的时候，`webView` 的高度就变小了，导致 以 `bottom` 定位的元素往上移。换个思路用 `top` 定位。
`40` 为假设你元素的高度，可以自行调节。

```
var bottomEl = document.querySelector('.bottom');
// 可见区域高度减去元素的高度
window.addEventListener('resize',function(){
    bottomEl.style.top = document.documentElement.clientHeight - 40 + 'px';
});

```

### MUI开发者博客
[技术文档](http://ask.dcloud.net.cn/people/DCloud_App_Array) 这里有作者关于MUI，H5+ 等的技术文档，可以多参考。

## MUI 的源码拓展

我们是否增加一个 `mui-extend.js` 文件，来针对自己的项目封装方法。

*想法如下：*

```javascript
(function($,doc,w) {
    
    // 获取兄弟元素
    $.getSiblings(o){ 
      var a=[];
      var p=o.previousSibling; 
      while(p){ 
          if(p.nodeType===1){ 
              a.push(p); 
          } 
          p = p.previousSibling;
      } 
      a.reverse();
      var n=o.nextSibling; 
      while(n){
          if(n.nodeType===1){ 
              a.push(n); 
          } 
          n = n.nextSibling; 
      } 
      return a;
    };

    // 获取元素位置
    $.getPosition(elem) {
        var rect = elem.getBoundingClientRect();
        return {
            top: rect.top + doc.body.scrollTop,
            left: rect.left + doc.body.scrollLeft
        }
    }

})(mui,document,window);
```
这样，我们可以轻松的获取一个元素的兄弟集合。比如在事件代理中特别常见的功能

```javascript
$('.className').on('tap','.a',function(){
    this.classList.add('on');
    var siblings = $.getSiblings(this);
    siblings.forEach(function(item){
        item.classList.remove('on');
    })
});
```
就完成了点击当前元素激活它，并把它兄弟元素设置为未激活。
