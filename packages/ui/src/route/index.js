import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/index.vue';
import hljs from 'highlight.js';
import components from './components.route';

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
        }
      ]
    },
    {
      path: '/component/',
      component: Layout,
      redirect: '/component/quickstart',
      meta: {
        title: '组件',
      },
      children: [
        {
          path: 'quickstart',
          meta: {
            title: '快速开始',
          },
          component:() => import(`@/views/introduce/quickstart.md`),
        },
        ...components.map(c => {
          return {
            path: '/component/' + c.name.toLocaleLowerCase(),
            name: c.name,
            component:() => import(`@/components/${c.name}/index.md`),
            meta: {
              title: c.title,
            }
          }
        })
      ]
    },
    {
      path: '*',
      name: '404',
      component:() => import('@/views/404/index.vue'),
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