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
          path: '/2',
          component: () => import('@/views/compress/index.vue'),
          children: [
            {
              path: '/2',
              meta: { title: '压缩到指定kb' },
              component: () => import('@/views/compress/compresskb/index.vue')
            },
            {
              path: '/compressmb2',
              meta: { title: '压缩到指定mb' },
              component: () => import('@/views/compress/compressmb/index.vue')
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
