import Loading from './components/Loading/index';
import DragSort from './components/DragSort/index';
import WaterFall from './components/WaterFall/index';
import Filters from './components/Filters/index';
import Tabs from './components/Tabs/index';
import TabPanel from './components/Tab-panel/index';

// directives
import dragSelect from './directives/drag-select.js';
import hoverSlide from './directives/hover-slide.js';
import mouseDirection from './directives/mouse-direction.js';

const components = {
  DragSort,
  WaterFall,
  Filters,
  Tabs,
  TabPanel
};

const directives = {
  dragSelect,
  hoverSlide,
  mouseDirection
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