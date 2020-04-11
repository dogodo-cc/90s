import Loading from './components/Loading/index';
import DragSort from './components/DragSort/index';
import dragSelect from './directives/drag-select.js';

const components = {
  DragSort
};

const install = function(Vue) {

  Object.values(components).forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.use(Loading.directive);
  Vue.prototype.$hiLoading = Loading.service;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export default  {
  install,
  dragSelect,
  Loading,
  ...components
}