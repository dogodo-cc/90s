import Vue from 'vue';
import Vuex from 'vuex';
import test from './modules/test';

Vue.use(Vuex);

/**
 * @description 采用模块化和命名空间的方式
 * @link https://vuex.vuejs.org/zh/guide/modules.html
 */
export default new Vuex.Store({
    // eslint-disable-next-line
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        test
    }
});
