import Filters from './src/index.vue';

Filters.install = function(Vue) {
  Vue.component(Filters.name, Filters);
};

export default Filters;
