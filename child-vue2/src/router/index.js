import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// 此Router是自己自定义引入暴露出来的，即是自定义的，以下的Router同样是这样
// 解决两次访问相同路由地址报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const BASEURL = process.env.NODE_ENV === 'production' ? '/vue2' : '/vue2';

export default new Router({
  mode: 'history',
  base: window.__POWERED_BY_QIANKUN__ ? "/vue2" : "/vue2", 
  routes:[
    {
      /* 首先进行重新定向操作 */
      path: '/',
      redirect: {
          name: 'v2-direction'
      }
  },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/Layout/index.vue'),
      children: [
        {
          path: '/v2-direction',
          name: 'v2-direction',
          meta: {
              isLogin: true,
              title: ['自定义指令']
          },
          component: () => import('@/views/direction/Index.vue')
      },
      ]
    }
  ]
})