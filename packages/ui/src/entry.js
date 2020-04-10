import Vue from 'vue';
import App from './App.vue';
import router from './route';
import demoBlock from './layout/demo-block.vue';
import HelloUI from './main';
import 'hello-ui/src/components/stylesheet/hello-ui.scss'

import './icons';

import "normalize.css"
import '@/styles/layout.scss'; // 项目布局样式
import '@/styles/demo/index.scss'; // 每个demo单独的样式


Vue.config.productionTip = false;
Vue.component('demo-block', demoBlock);
Vue.use(HelloUI);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')