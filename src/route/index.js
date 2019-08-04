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
      meta: {
        title: '首页'
      },
      children: [
        {
          path: '/',
          name: 'home',
          component:() => import(/* webpackChunkName: "home" */ '@/views/home/index.vue'),
        }
      ]
    },
    {
      path: '/css',
      component: Layout,
      meta: {title: 'CSS 笔记'},
      children: [
        {
          path: '/',
          component:() => import(/* webpackChunkName: "css" */ '@/views/css-note/index.vue'),
        },
        {
          path: '/animate',
          component:() => import(/* webpackChunkName: "animate" */ '@/views/css-note/animate/index.vue'),
          meta: {
            title: '动画'
          }
        },
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
          path: '/',
          component:() => import(/* webpackChunkName: "effect-index" */ '@/views/effects/index.vue'),
        },
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
        },
        {
          path: '/danmuke',
          component:() => import(/* webpackChunkName: "danmuke" */ '@/views/effects/danmuke/index.vue'),
          meta: {
            title: '弹幕系统'
          }
        },
      ]
    },
    {
      path: '/note',
      component: Layout,
      meta: {
        title: '笔记',
      },
      children: [
        {
          path: '/',
          component:() => import(/* webpackChunkName: "note-index" */ '@/views/note/index.vue'),
        },
        {
        path: '/flex',
        component:() => import(/* webpackChunkName: "flex" */ '@/views/note/flex/index.vue'),
        meta: {
          title: 'flex 布局'
        }
      }]
    },
    {
      path: '/study',
      component: Layout,
      meta: {
        title: '学习笔记',
      },
      children: [
        {
          path: '/',
          component:() => import(/* webpackChunkName: "study-index" */ '@/views/study/index.vue'),
        },
        {
        path: '/svg-lesson-01',
        component:() => import(/* webpackChunkName: "svg-lesson-01" */ '@/views/study/svg/lesson-01/index.vue'),
        meta: {
          title: 'svg 第一节'
        }
        },
        {
          path: '/canvas-lesson-01',
          component:() => import(/* webpackChunkName: "canvas-lesson-01" */ '@/views/study/canvas/lesson-01/index.vue'),
          meta: {
            title: 'canvas 第一节'
          }
        }
      ]
    },
    {
      path: '/sharon',
      component:() => import(/* webpackChunkName: "sharon" */ '@/views/sharon/photos/index.vue'),
      meta: {
        title: '照片墙',
        pageTitle: '我们结婚啦^_^'
      }
    },
    {
      path: '/love',
      component:() => import(/* webpackChunkName: "love" */ '@/views/sharon/love/index.vue'),
      meta: {
        title: '爱心表白',
        pageTitle: '我们结婚啦^_^'
      }
    },
    {
      path: '/case',
      component:() => import(/* webpackChunkName: "case" */ '@/views/case/index.vue'),
      meta: {
        title: '优秀网页'
      },
      children: [
        {
          path: '/',
          component:() => import(/* webpackChunkName: "case" */ '@/views/case/hongkong20/index.vue'),
        },
        {
          path: '/hongkong20',
          component:() => import(/* webpackChunkName: "case" */ '@/views/case/hongkong20/index.vue'),
          meta: {
            title: '香港回归20周年'
          }
        }
      ]
    },
    {
      path: '*',
      name: 'not-found',
      component:() => import(/* webpackChunkName: "404" */ '@/views/404/index.vue'),
    }
  ]
})



router.afterEach(to => {
  if (to.meta && to.meta.pageTitle) {
    document.title = to.meta.pageTitle;
  } else {
    document.title = '前端路上';
  }
});


export default router;