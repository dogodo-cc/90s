import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout/index.vue';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  base: '/',
  scrollBehavior(to, from, savedPosition) {
    return {
        x: 0,
        y: 0,
    };
  },
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'home',
          component:() => import(/* webpackChunkName: "home" */ '@/views/home/index.vue'),
          meta: {
            title: '首页'
          }
        }
      ]
    },
    {
      path: '/effects',
      component: Layout,
      meta: {
        title: '动效'
      },
      children: [
        {
          path: '/china-map',
          component:() => import(/* webpackChunkName: "china-map" */ '@/views/effects/china-map/index.vue'),
          meta: {
            title: '中国地图'
          }
        },
        {
          path: '/svg-animals',
          component:() => import(/* webpackChunkName: "svg-animals" */ '@/views/effects/svg-animals/index.vue'),
          meta: {
            title: 'SVG - 动物动画'
          }
        },
        {
          path: '/loading',
          component:() => import(/* webpackChunkName: "loading" */ '@/views/effects/loading/index.vue'),
          meta: {
            title: '加载动画'
          }
        },
        {
          path: '/mouse',
          component:() => import(/* webpackChunkName: "mouse" */ '@/views/effects/mouse/index.vue'),
          meta: {
            title: '鼠标效果'
          }
        }
      ]
    },
    {
      path: '/note',
      component: Layout,
      meta: {
        title: '笔记',
      },
      children: [{
        path: '/flex',
        component:() => import(/* webpackChunkName: "flex" */ '@/views/note/flex/index.vue'),
        meta: {
          title: 'flex 布局'
        }
      }]
    },
    {
      path: '*',
      // redirect: '404',
      name: 'not-found',
      component:() => import(/* webpackChunkName: "404" */ '@/views/404/index.vue'),
    }
  ]
})





export default router;