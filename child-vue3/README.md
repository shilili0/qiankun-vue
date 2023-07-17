1、创建微应用项目-vue3
npm init vue@latest

// 和vue2的不一样
npm i vite-plugin-qiankun -D

project-name： child-vue3
2、在src目录新增public-path.js
if (window.__POWERED_BY_QIANKUN__) {
  // 动态设置 webpack publicPath，防止资源加载出错
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

3、修改路由文件，建议使用history模式，并设置base值，base值和主应用中的activeRule的一样
import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  mode: 'history',
  base: window.__POWERED_BY_QIANKUN__ ? "/vue" : "/",
  history: createWebHashHistory('/vue'),
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

4、mian.ts 的内容修改如下-index.html中的id改为 app-child-one
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './public-path'

// const app = createApp(App)

// app.use(createPinia())
// app.use(router)


import {
  renderWithQiankun,
  qiankunWindow
} from 'vite-plugin-qiankun/dist/helper'

let app = null;

const render = (container) => {
  app = createApp(App)
  app
    .use(router)
    .mount(container ? container.querySelector('#app-child-one') : '#app-child-one')
}

const initQianKun = () => {
  renderWithQiankun({
    mount(props) {
      const { container } = props
      render(container)
    },
    bootstrap() {},
    unmount() {
      app.unmount()
    }
  })
}
qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render()

// app.mount('#app')



运行起来 localhost:8001