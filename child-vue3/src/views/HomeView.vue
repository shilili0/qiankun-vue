<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import fxButton from '@/components/button/fx-button.vue';
import fxButtonGroup from '@/components/button/fx-button-group.vue'
const clickBtn = (value)=>{
  console.log(value);
  
}
</script>

<template>
  <main>
    测试
    <fxButtonGroup>
      <fxButton class="btn-primary btn-ceshi" @click="clickBtn('测试1')">测试1</fxButton>
      <fxButton>测试2</fxButton>
    </fxButtonGroup>
    
    <TheWelcome />
  </main>
</template>
