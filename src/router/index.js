import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      meta: { title: 'EditImage' },
      component: () => import('@/views/index/index.vue'),
      children: [
        {
          path: '/',
          component: () => import('@/views/compress/index.vue'),
          children: [
            {
              path: '/',
              meta: { title: '压缩到指定kb' },
              component: () => import('@/views/compress/compresskb/index.vue')
            },
            {
              path: '/compressmb',
              meta: { title: '压缩到指定mb' },
              component: () => import('@/views/compress/compressmb/index.vue')
            }
          ]
        },
        {
          path: '/changesize',
          component: () => import('@/views/changesize/index.vue'),
          children: [
            {
              path: '/changesize',
              meta: { title: '一寸照片' },
              component: () => import('@/views/changesize/oneinch/index.vue')
            },
            {
              path: '/twoinchessmall',
              meta: { title: '小二寸照片' },
              component: () => import('@/views/changesize/twoinchessmall/index.vue')
            },
            {
              path: '/twoinchesinsize',
              meta: { title: '大二寸照片' },
              component: () => import('@/views/changesize/twoinchesinsize/index.vue')
            },
            {
              path: '/size',
              meta: { title: '自定义尺寸' },
              component: () => import('@/views/changesize/size/index.vue')
            }
          ]
        }
      ]
    }
  ]
})
// 路由触发后
router.afterEach((to) => {
  document.title = `${to.meta.title || ''} - EditImage`
  window.scrollTo(0, 0)
})
export default router
