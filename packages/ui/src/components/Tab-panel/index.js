import TabPane from '../Tabs/src/tab-panel.vue';

/* istanbul ignore next */
TabPane.install = function(Vue) {
  Vue.component(TabPane.name, TabPane);
};

export default TabPane;
