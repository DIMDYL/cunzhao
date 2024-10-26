import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/index/index.vue')
    },
    {
      path: '/2',
      component: () => import('@/views/index/index.vue')
    }
  ]
})
export default router
