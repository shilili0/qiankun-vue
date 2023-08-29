import Vue from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'

import "ant-design-vue/dist/antd.less";
import './public-path'
import router from "./router";
// 绑定全局direction
import "./plugins/direction"

// 注册全局插件
import notify from '@/plugins/notify/notify'

// 
import store from '@/store/index'
Vue.use(notify)
Vue.use(Antd)
Vue.config.productionTip = false
// new Vue({
//   render: h => h(App),
// }).$mount('#app')
let instance = null

function render(props = {}) {
  const { container } = props
  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped')
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props)
}
export async function unmount() {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
}
