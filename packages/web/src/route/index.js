import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/index.vue';

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
          props: (route) => ({
            name: route.params.name, // 路由传参的方式 此时 path：/:name
          }),
        }
      ]
    },
    // {
    //   path: '/css',
    //   component: Layout,
    //   meta: {title: 'CSS 笔记'},
    //   children: [
    //     {
    //       path: '/',
    //       component:() => import('@/views/css-note/index.vue'),
    //     },
    //     {
    //       path: '/css/animate',
    //       component:() => import('@/views/css-note/animate/index.vue'),
    //       meta: {
    //         title: '动画'
    //       }
    //     },
    //   ]
    // },
    // {
    //   path: '/effects',
    //   component: Layout,
    //   meta: {
    //     title: '动效'
    //   },
    //   children: [
    //     {
    //       path: '/',
    //       component:() => import('@/views/effects/index.vue'),
    //     },
    //   ]
    // },
    // {
    //   path: '/note',
    //   component: Layout,
    //   meta: {
    //     title: '笔记',
    //   },
    //   children: [
    //     {
    //       path: '/',
    //       component:() => import('@/views/note/index.vue'),
    //     },
    //     {
    //       path: '/note/flex',
    //       component:() => import('@/views/note/flex/index.vue'),
    //       meta: {
    //         title: 'flex 布局'
    //       }
    //     },
    //     {
    //       path: '/note/drag',
    //       component:() => import('@/views/note/drag/index.vue'),
    //       meta: {
    //         title: '拖动选择&分类'
    //       }
    //     },
    //     {
    //       path: '/note/danmuke',
    //       component:() => import('@/views/note/danmuke/index.vue'),
    //       meta: {
    //         title: '弹幕系统'
    //       }
    //     },
    //   ]
    // },
    // {
    //   path: '/study',
    //   component: Layout,
    //   meta: {
    //     title: '学习笔记',
    //   },
    //   children: [
    //     {
    //       path: '/',
    //       component:() => import('@/views/study/index.vue'),
    //     },
    //     {
    //       path: '/study/svg-lesson-01',
    //       component:() => import('@/views/study/svg/lesson-01/index.vue'),
    //       meta: {
    //         title: 'svg 第一节'
    //       }
    //     },
    //     {
    //       path: '/study/canvas-lesson-01',
    //       component:() => import('@/views/study/canvas/lesson-01/index.vue'),
    //       meta: {
    //         title: 'canvas 第一节'
    //       }
    //     }
    //   ]
    // },
    // {
    //   path: '/sharon',
    //   component:() => import('@/views/sharon/love/index.vue'),
    //   meta: {
    //     title: '爱心表白',
    //     pageTitle: '我们结婚啦^_^',
    //     hidden: true
    //   }
    // },
    {
      path: '*',
      name: '404',
      component: () => import('@/views/404/index.vue'),
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