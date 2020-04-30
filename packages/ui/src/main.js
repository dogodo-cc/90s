import Loading from './components/Loading/index';
import DragSort from './components/DragSort/index';
import WaterFall from './components/WaterFall/index';
import Filters from './components/Filters/index';

// directives
import dragSelect from './directives/drag-select.js';
import hoverSlide from './directives/hover-slide.js';

const components = {
  DragSort,
  WaterFall,
  Filters
};

const directives = {
  dragSelect,
  hoverSlide
}

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
  Loading,
  ...components,
  ...directives
}