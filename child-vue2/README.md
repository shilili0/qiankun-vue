<a name="CU8lE"></a>
### 1、创建vue项目
```typescript
vue create child-vue2

要求node版本不高于18，
```
<a name="dnMKi"></a>
### 2、在src目录新增`public-path.js`
```typescript
if (window.__POWERED_BY_QIANKUN__) {
  // 动态设置 webpack publicPath，防止资源加载出错
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

```
<a name="jOh6b"></a>
### 3、修改路由文件，建议使用history模式，并设置base值，base值和主应用中的activeRule的一样
```typescript
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: window.__POWERED_BY_QIANKUN__ ? "/vue2" : "/vue2", //提交时注释，本地放开
  routes:[
   
  ]
})
```
<a name="UxFrE"></a>
### 4、mian.js 的内容修改如下
```typescript
import Vue from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'

import "ant-design-vue/dist/antd.less";
import './public-path'
import router from "./router";

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

```
<a name="ZFP2R"></a>
### 5、vue.config.js 修改如下
```typescript
const { defineConfig } = require('@vue/cli-service')
const { name } = require('./package');
module.exports = defineConfig({
  devServer: {
    port: 8002,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  transpileDependencies: true,
  lintOnSave:false,
  css: {
    extract: false,
    sourceMap: true, // 开启 CSS source maps?
    loaderOptions:{
      less:{
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: {
    output: {
      // library: `${name}-[name]`,
      library: `childVue2`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      // jsonpFunction: `webpackJsonp_${name}`,
    },
  },

})

```
<a name="uNW6f"></a>
### 以下是针对主应用添加的配置
<a name="S8DiX"></a>
### 6、在主应用[main文件夹]中的文件夹qiankun/apps.ts中添加如下代码
```typescript
{
    name: "child-vue",
    entry: "//localhost:8002", ////默认会加载这个html,解析里面的js,动态执行（子应用必须支持跨域）里面,是用fetch去请求的数据
    container: "#subApp2",  //挂载到主应用的哪个元素下
    activeRule: "/vue2",//当我劫持到路由地址为/vue2时，我就把http://localhost:8001这个应用挂载到#subApp的元素下
    props:{}, // 给子应用传递数据
  }
```
<a name="ZZ3Ki"></a>
### 7、在主应用[main文件夹]中router/index.ts中添加如下代码
```typescript
{
      path: '/vue2/child-vue2/',
      name: 'child-vue2',
      component: () => import('@/views/vue2-project.vue')
    }
```
<a name="Uwfb1"></a>
### 8、 在view/vue2-project.vue添加如下代码
```typescript
<template>
  <h1>我是子应用 child-vue2</h1>
  <div class="about" id="subApp2">
    
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { start } from "qiankun"; 

onMounted(() => {
  console.log(window,window?.qiankunStarted);
  
  if (!window?.qiankunStarted) {
    window.qiankunStarted = true;
    start({
      sandbox: {
        experimentalStyleIsolation: true // 样式隔离
      }
    });
  }
})


</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

```
<a name="pS4tA"></a>
### 9、在app.vue中添加如下代码
```typescript
{
      key: 'vue2',
      title: '第二个微应用-vue2',
      path: "/vue2/child-vue2"
    }
```
最后启动访问即可
