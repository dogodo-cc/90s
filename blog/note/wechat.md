# 小程序开发笔记

## 常见问题

### ^_^ 事件传参
不能直接在事件执行的函数里传参，只能通过事件对象`event`来获取，把参数写在`data-`属性里
```
// index.wxml
<view bindtap="handClick" data-name="nike"></view>

// index.js
handClick(e) {
    const name = e.currentTarget.dataset.name;
}
```

### ^_^ computed 实现
如果要实现 `vue` 常用的 `computed`,在小程序里是通过 `behaviors`来实现的，而且只有小程序的`component`支持，`page`是不支持的，不过小程序的`component`是`page`的超集，所以可以用`component`来构建页面。

### ^_^ 自定义导航栏，让背景延伸到状态栏（手机顶部）

```js
// 如果是全部页面都是这样则在 *app.json* 里配置 
{
    "windows": {
        "navigationStyle": "custom"
    }
}

// 如果是指定页面需要，则在 *page.json* 里配置
{
    "navigationStyle": "custom"
}
```
而导航栏的高度可以通过 *wx.getSystemInfo* 对比前后的 *windowHeight* 来计算。

### ^_^ wxs 是什么
因为在小程序的 *.wxml* 文件中，只能通过 `{{}}` 来引用 *data* 的数据，且它只支持简单的*js表达式*。

有时候我们希望数据是经过某个些方法处理之后返回目标值，`wxs`就是为了解决这个问题的。


## 解决方案

### iconfont使用
* 小程序只支持本地样式，所以需要将iconfont上的*icon*下载下来。
* 将下载好的iconfont文件夹内容全部丢进项目的*font*文件夹内，并将*iconfont.css*改后缀为*iconfont.wxss*
* 在*app.wxss* 里引用 *iconfont.wxss*
* 需要优化大小可以只留*svg* 和 *woff2* 格式 (可以在最终发布的时候优化)

## 换行符
换行和空格只能在<text></text>里面写，换行是：\n空格是：\t

## wxss 的处理
小程序的wxss，不支持嵌套样式，所以全部使用scss来写样式，通过自己编写的脚本，将scss 编译成 wxss。[npm 地址](https://www.npmjs.com/package/scss2wxss)

## 启动参数
因为很多页面都是使用组件来构建的，所以没有onload 事件，不能直接通过 onload的参数直接获取启动参数，可使用原生方法 `getCurrentPages` 来得到，要在组件的 `pageLifetimes` 的生命周期函数里执行。
