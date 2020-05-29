import Vue from 'vue';
import App from './App.vue';
import router from './route'
import store from './store';
import eventBus from "./utils/event-bus";
import Icon from './components/Icon';

// hello-ui
import HelloUI from '90s-ui';
import '90s-ui/lib/hello-ui.css';

Vue.use(HelloUI);

Icon.regist('//at.alicdn.com/t/font_1431321_3zy5l06f66u.js');
Vue.use(Icon);

import "normalize.css"
import '@/styles/reset.scss';
import '@/styles/layout.scss';

// plugins
import './plugins/element.js'

Vue.config.devtools = true;
Vue.config.productionTip = false;

Vue.prototype.$eventBus = eventBus;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
