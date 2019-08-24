import Vue from 'vue';
import App from './App.vue';
import router from './route'

import "normalize.css"
import '@/styles/reset.scss';
import '@/styles/layout.scss';

// plugins
import './plugins/element.js'


Vue.config.productionTip = false;

// eslint-disable-next-line 
const app = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// eslint-disable-next-line no-console
// console.log(app);