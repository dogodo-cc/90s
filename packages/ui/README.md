## 快速上手

本节将介绍如何在项目中使用 hello-ui。


### 引入 hello-ui

你可以引入整个 `hello-ui`，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 `hello-ui`。

#### 完整引入

在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import HelloUI from 'hello-ui';
import 'hello-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(HelloUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

以上代码便完成了 `hello-ui` 的引入。需要注意的是，样式文件需要单独引入。

### 按需引入

抱歉，还没提供这种方式，后期会完善

### 开始使用

至此，一个基于 `Vue` 和 `hello-ui` 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。



