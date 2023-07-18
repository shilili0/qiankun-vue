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
