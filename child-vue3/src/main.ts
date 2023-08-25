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

let app: any = null;

const render = (container: any) => {
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


