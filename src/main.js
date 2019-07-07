import Vue from 'vue';
import App from './App.vue';
import router from './route'

import "normalize.css"
import '@/styles/reset.scss';
import '@/styles/layout.scss';


Vue.config.productionTip = false;

const app = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// eslint-disable-next-line no-console
// console.log(app);