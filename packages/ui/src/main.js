import Loading from './components/Loading/index';
import DragSort from './components/DragSort/index';

const components = [
  Loading,
  DragSort
];

const install = function(Vue, opts = {}) { // eslint-disable-line

  components.forEach(component => {
    Vue.component(component.name, component);
  });

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Loading,
  DragSort
}