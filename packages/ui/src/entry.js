import Vue from 'vue';
import App from './App.vue';
import router from './route';
// import bem from './mixins/bem';
import demoBlock from './layout/demo-block.vue';
import HIui from './main';

import Icon from './components/Icon';
Icon.regist('//at.alicdn.com/t/font_1431321_3zy5l06f66u.js');
Vue.use(Icon);

import "normalize.css"
import '@/styles/common.scss';
import '@/styles/hljs.css';
import '@/styles/layout.scss';


Vue.config.productionTip = false;
// Vue.mixin(bem)
Vue.component('demo-block', demoBlock);
Vue.use(HIui);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')