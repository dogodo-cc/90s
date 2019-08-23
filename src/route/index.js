import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout/index.vue';

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
      redirect: {
        name: 'home'
      }
    },
    {
      path: '/home',
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
      path: '/css',
      component: Layout,
      meta: {title: 'CSS 笔记'},
      children: [
        {
          path: '/',
          component:() => import('@/views/css-note/index.vue'),
        },
        {
          path: '/css/animate',
          component:() => import('@/views/css-note/animate/index.vue'),
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
          component:() => import('@/views/effects/index.vue'),
        },
        {
          path: '/effects/china-map',
          component:() => import('@/views/effects/china-map/index.vue'),
          meta: {
            title: '中国地图'
          }
        },
        {
          path: '/effects/svg-animals',
          component:() => import('@/views/effects/svg-animals/index.vue'),
          meta: {
            title: 'SVG - 动物动画'
          }
        },
        {
          path: '/effects/loading',
          component:() => import('@/views/effects/loading/index.vue'),
          meta: {
            title: '加载动画'
          }
        },
        {
          path: '/effects/mouse',
          component:() => import('@/views/effects/mouse/index.vue'),
          meta: {
            title: '鼠标效果'
          }
        },
        {
          path: '/effects/danmuke',
          component:() => import('@/views/effects/danmuke/index.vue'),
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
          component:() => import('@/views/note/index.vue'),
        },
        {
        path: '/note/flex',
        component:() => import('@/views/note/flex/index.vue'),
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
          component:() => import('@/views/study/index.vue'),
        },
        {
        path: '/study/svg-lesson-01',
        component:() => import('@/views/study/svg/lesson-01/index.vue'),
        meta: {
          title: 'svg 第一节'
        }
        },
        {
          path: '/study/canvas-lesson-01',
          component:() => import('@/views/study/canvas/lesson-01/index.vue'),
          meta: {
            title: 'canvas 第一节'
          }
        }
      ]
    },
    {
      path: '/sharon',
      component:() => import('@/views/sharon/photos/index.vue'),
      meta: {
        title: '照片墙',
        pageTitle: '我们结婚啦^_^',
        hidden: true
      }
    },
    {
      path: '/love',
      component:() => import('@/views/sharon/love/index.vue'),
      meta: {
        title: '爱心表白',
        pageTitle: '我们结婚啦^_^'
      }
    },
    {
      path: '/case',
      component: Layout,
      meta: {
        title: '优秀网页'
      },
      children: [{
        path: '/',
        component:() => import('@/views/case/index.vue'),
      }]
    },
    {
      path: '*',
      name: 'not-found',
      component:() => import(/* webpackChunkName: "not-found" */ '@/views/not-found/index.vue'),
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