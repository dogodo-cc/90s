import Vue from 'vue';
import App from './App.vue';
import router from './route'
import eventBus from "./utils/event-bus";

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
  render: h => h(App),
}).$mount('#app')

// eslint-disable-next-line no-console
// console.log(app);