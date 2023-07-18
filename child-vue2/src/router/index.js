import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const BASEURL = process.env.NODE_ENV === 'production' ? '/vue2' : '/vue2';

export default new Router({
  mode: 'history',
  base: window.__POWERED_BY_QIANKUN__ ? "/vue2" : "/vue2", //提交时注释，本地放开
  routes:[
   
  ]
})