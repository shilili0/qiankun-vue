import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  mode: 'history',
  base: (window as any )?.__POWERED_BY_QIANKUN__ ? "/vue" : "/",
  history: createWebHistory('/vue'),
  routes: [
    {
      path: '/',
      name: 'home-demo1',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about-demo1',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
