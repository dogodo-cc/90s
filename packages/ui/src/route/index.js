import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/index.vue';
import hljs from 'highlight.js';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  base: '/',
  scrollBehavior() {
    return {
        x: 0,
        y: 0,
    };
  },
  routes: [
    {
      path: '/',
      component: Layout,
      meta: {
        title: '首页'
      },
      children: [
        {
          path: '/',
          name: 'home',
          component:() => import('@/views/home/index.vue'),
        },
        {
          path: '/loading',
          name: 'loading',
          component:() => import('@/components/Loading/index.md'),
          meta: {
            title: '加载',

          }
        },
        {
          path: '/drag',
          name: 'drag',
          component:() => import('@/components/DragSort/index.md'),
          meta: {
            title: '拖动分类',
          }
        }
      ]
    },
    {
      path: '*',
      name: '404',
      component:() => import(/* webpackChunkName: "404" */ '@/views/404/index.vue'),
    }
  ]
})



router.afterEach(to => { // eslint-disable-line
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)');
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });
});


export default router;