import main from './main.vue';

let SYMBOLS_SCRIPT = null;
main.regist = function regist(url) {
  if (SYMBOLS_SCRIPT || !url) return;
  SYMBOLS_SCRIPT = document.createElement('script');
  document.body.appendChild(SYMBOLS_SCRIPT);
  SYMBOLS_SCRIPT.src = url;
};
main.install = function install(Vue) {
  Vue.component('icon', main);
};

export default main;
