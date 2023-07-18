<template>
  <el-container>
    <el-header>头部</el-header>
    <el-container>
      <div class="contatiner-wrap">
        <el-aside width="260px">
          <el-scrollbar>
            <el-menu 
              router="true"
              :default-active="activeIndex" 
              class="el-menu-demo" 
              @select="handleSelect">
              <el-sub-menu index="1">
                <template #title>
                  <el-icon>
                    <message />
                  </el-icon>微前端
                </template>
                <el-menu-item-group>
                  <el-menu-item :index="item.path" :key="item.path" v-for="item in menus">{{ item.title }}</el-menu-item>
                </el-menu-item-group>
              </el-sub-menu>
            </el-menu>
          </el-scrollbar>
        </el-aside>
      
        <el-container class="container">
          <el-main>
            <router-view></router-view>
          </el-main>

          <el-footer>Footer</el-footer>
        </el-container>
      </div>
    </el-container>
  </el-container>
</template>

<script lang='ts' setup>
import {ref} from 'vue';

import {RouterView } from 'vue-router'

const menus = [
  {
    key: 'home',
    title: '主页',
    path: "/home"
  },
  {
    key: 'vue3',
    title: '第一个微应用-vue3',
    path: "/vue3"
  },
  {
    key: 'vue2',
    title: '第二个微应用-vue2',
    path: "/vue2"
  }
]
const activeIndex = ref('/home')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
  activeIndex.value = key;
}
</script>

<style scoped>
.contatiner-wrap{
  display: flex;
}
.container{
    flex: 1;
  }
</style>