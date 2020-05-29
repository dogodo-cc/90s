import Tab from './src/index.vue';

Tab.install = function(Vue) {
  Vue.component(Tab.name, Tab);
};

export default Tab;
