import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      meta: { title: '压缩图片' },
      component: () => import('@/views/index/index.vue')
    },
    {
      path: '/2',
      meta: { title: '修改尺寸' },
      component: () => import('@/views/index/index.vue')
    }
  ]
})
// 路由触发后
router.afterEach((to) => {
  document.title = `${to.meta.title || ''} - EditImage`
  window.scrollTo(0, 0)
})
export default router
