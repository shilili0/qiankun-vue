# qiankun 主应用配置
qiankun是一个基于single-spa的微前端实现库，目的是构建一个更简单、无痛的构建一个生产可用微前端架构系统。
微前端具备以下几个核心价值：
1. 与技术栈无关-主框架不限制接入应用的技术栈，微应用具备完全自主权
2. 独立开发、独立部署- 微应用仓库独立、前后端可独立开发，部署完成后主框架自动完成同步更新
3. 增量笙纪- 在面对各种复杂场景时，我们通常很难对一个已经存在的系统做全量的技术栈升级或重构，而微前端是一种非常好的实施渐进式重构的手段和策略
4. 独立运行时，每个微应用之间状态隔离，运行时状态不共享
qiankun的核心设计理念
1. 简单
 由于主应用微应用都能做到技术栈无关，qiankun对于用户而言只是一个类似jQuery的库，你需要调用几个qiankun的API即可完成应用的微前端改造，同时由于qiankun的HTML entry及沙箱的设计，使得微应用的接入像使用iframe 一样简单。
2. 解耦/技术栈无关
微前端的核心目标是将巨石应用拆解成若干可以自治的松耦合微应用，而qiankun的诸多设计均是秉持这一原则，如HTML entry、沙箱、 应用间通信等。这样才能确保微应用真正具备独立开发、独立运行的能力。
特性
● 基于 single-spa 封装，提供了更加开箱即用的 API。
● 技术栈无关，任意技术栈的应用均可 使用/接入，不论是 React/Vue/Angular/JQuery 还是其他等框架。
●  HTML Entry 接入方式，让你接入微应用像使用 iframe 一样简单。
● 样式隔离，确保微应用之间样式互相不干扰。
● JS 沙箱，确保微应用之间 全局变量/事件 不冲突。
● 资源预加载，在浏览器空闲时间预加载未打开的微应用资源，加速微应用打开速度。
● umi 插件，提供了 @umijs/plugin-qiankun 供 umi 应用一键切换成微前端架构系统。

主应用(父)-vue3[jquery、react、vue2都可以的]
1、主应用不限技术，只需要提供一个DOM容器，然后注册微应用并start即可。
1、创建主应用项目-vue3
npm init vue@latest

//在主应用中安装qiankun框架
npm i qiankun -S
2、在主应用中注册微应用
1. 先在src目录下新建qiankun/index.ts

import {
  registerMicroApps,
  addGlobalUncaughtErrorHandler,
  start,
} from "qiankun";
import apps from './apps';

/* 
  注册微应用
  第一个参数-微应用的注册信息
  第二个参数- 全局生命周期钩子
*/
registerMicroApps(apps,{
  // qiankun 生命周期钩子 - 微应用加载前
  beforeLoad: (app: any)=>{
    console.log("before load", app.name);
    return Promise.resolve()
  },
  // qiankun 生命周期钩子 - 微应用挂载后
  afterMount: (app: any)=>{
    console.log("after mount", app.name);
    return Promise.resolve()
  },
})
/**
* 添加全局的未捕获异常处理器
*/
addGlobalUncaughtErrorHandler((event: Event | string) => {
 console.error(event);
 const { message: msg } = event as any;
 // 加载失败时提示
 if (msg && msg.includes("died in status LOADING_SOURCE_CODE")) {
   console.log("微应用加载失败，请检查应用是否可运行");
 }
});

// 导出 qiankun 的启动函数
export default start;
2. 在qiankun/app.ts下注册微应用
// 此时还没有微应用，所以apps为空

const apps:any = [
  /**
   * name: 微应用名称 - 具有唯一性
   * entry: 微应用入口 - 通过该地址加载微应用
   * container: 微应用挂载节点 - 微应用加载完成后将挂载在该节点上
   * activeRule: 微应用触发的路由规则 - 触发路由规则后将加载该微应用
   */
  {
    name: "child-vue3",
    entry: "//localhost:8001", ////默认会加载这个html,解析里面的js,动态执行（子应用必须支持跨域）里面,是用fetch去请求的数据
    container: "#subApp",  //挂载到主应用的哪个元素下
    activeRule: "/vue",//当我劫持到路由地址为/vue2时，我就把http://localhost:8001这个应用挂载到#subApp的元素下
    props:{}, // 给子应用传递数据
  }
];
export default apps;
3. 在main.ts中引入并启动
import startQiankun from './qiankun'
startQiankun()


4. 在router/index.ts
{
    path: '/vue/child-vue3/',
    name: 'child-vue3',
    component: () => import('@/views/AboutView.vue')
  }
在AboutView.vue中添加如下代码
<template>
  <h1>我是子应用 child-vue3</h1>
  //此处的id 和apps.ts中的 container: "#subApp",保持一致 
  <div class="about" id="subApp">
    
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { start } from "qiankun"; 

onMounted(() => {
  console.log(window,window?.qiankunStarted);
  
  if (!window?.qiankunStarted) {
    window.qiankunStarted = true;
    start();
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


启动之后可以访问localhost:5173
如果想改变端口可以在package.json中添加 --port 8001

