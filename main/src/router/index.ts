import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Layout from '../components/Layout.vue'
console.log(import.meta.env.BASE_URL);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/Layout.vue'),
      redirect: '/home',
      children:[
        {
          path: '/home',
          name: 'home',
          component:()=> HomeView
        },
        {
          // history模式需要通配所有路由, 这样在vue3子应用中的路由可以在该子应用中切换
          path: '/vue3/:pathMatch(.*)*',
          name: 'child-vue3',
          component: () => import('@/views/AboutView.vue'),
        },
        {
          path: '/vue2',
          name: 'child-vue2',
          component: () => import('@/views/vue2-project.vue')
        }
      ]
    },
    
  ]
})

export default router
