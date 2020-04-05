import Vue from 'vue';
import App from './App.vue';
import router from './route'
import store from './store';
import eventBus from "./utils/event-bus";
import HIui from '@90s/ui';

Vue.use(HIui);

import Icon from './components/Icon';
Icon.regist('//at.alicdn.com/t/font_1431321_3zy5l06f66u.js');
Vue.use(Icon);

import "normalize.css"
import '@/styles/reset.scss';
import '@/styles/layout.scss';

// plugins
import './plugins/element.js'


Vue.config.productionTip = false;

Vue.prototype.$eventBus = eventBus;

// eslint-disable-next-line 
const app = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

// eslint-disable-next-line no-console
// console.log(app);