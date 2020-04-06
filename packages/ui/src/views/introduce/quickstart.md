## 快速上手

本节将介绍如何在项目中使用 HiUI。


### 引入 HiUI

你可以引入整个 HiUI，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 HiUI。

#### 完整引入

在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import HiUI from 'HiUI';
import 'HiUI/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(HiUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

以上代码便完成了 HiUI 的引入。需要注意的是，样式文件需要单独引入。

#### 按需引入

借助 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：

```bash
npm install babel-plugin-component -D
```

然后，将 .babelrc 修改为：

```json
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "HiUI",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```

接下来，如果你只希望引入部分组件，比如 Button 和 Select，那么需要在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import { Button, Select } from 'element-ui';
import App from './App.vue';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```

完整组件列表和引入方式（完整组件列表以 [components.json](https://github.com/ElemeFE/element/blob/master/components.json) 为准）

```javascript
import Vue from 'vue';
import {
  CascaderPanel,
  Loading,
  MessageBox,
  Message,
  Notification
} from 'element-ui';

Vue.use(TimelineItem);
Vue.use(Link);
Vue.use(Divider);
Vue.use(Image);
Vue.use(Calendar);
Vue.use(Backtop);
Vue.use(PageHeader);
Vue.use(CascaderPanel);

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
```


### 开始使用

至此，一个基于 Vue 和 Hello-UI 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。



