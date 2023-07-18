import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
console.log(import.meta.env.BASE_URL);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/vue/child-vue3/',
      name: 'child-vue3',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/vue2/child-vue2/',
      name: 'child-vue2',
      component: () => import('@/views/vue2-project.vue')
    }
  ]
})

export default router
