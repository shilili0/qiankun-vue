import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  mode: 'history',
  base: (window as any )?.__POWERED_BY_QIANKUN__ ? "/vue3" : "/",
  history: createWebHistory('/vue3'),
  routes: [
    {
      path: '/',
      name: 'home-demo1',
      component: ()=> HomeView,
    },
    {
      path: '/about',
      name: 'about-demo1',
      component: () => import('../views/AboutView.vue')
    },
    // {
    //   path: '*',
    //   redirect: '/home-demo1',
    // },
  ]
})

export default router
