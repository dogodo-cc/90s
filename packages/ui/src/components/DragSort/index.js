import DragSort from './src/index.vue';

/* istanbul ignore next */
DragSort.install = function(Vue) {
  Vue.component(DragSort.name, DragSort);
};

export default DragSort;
