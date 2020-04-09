import Vue from 'vue';
import App from './App.vue';
import router from './route';
import demoBlock from './layout/demo-block.vue';
import HIui from './main';

import './icons';

import "normalize.css"
import '@/styles/layout.scss';
import '@/styles/demo/index.scss';


Vue.config.productionTip = false;
Vue.component('demo-block', demoBlock);
Vue.use(HIui);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')