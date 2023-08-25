<template>
  <!-- 有一个bug，渲染出来的class 有2个一样的 -->
  <button class="btn btn-default" v-bind="attrs"><slot></slot></button>
</template>

<script lang='ts' setup>
import {useAttrs, h} from 'vue'
const attrs = useAttrs()
console.log(attrs);
</script>

<style lang='scss' scoped>
  .btn{
    width: 100%;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    font-size: 16px;
    font-family: PingFangSC-Regular;
    text-align: center;
    +.btn{
      margin-left: 8px;
    }
  
  }
  .btn-default{
    border: 1px solid #e3e3e3;
    color: #7F7F7F;
    font-family: PingFangSC-Regular;
  }
  .btn-primary{
    background-color: #08CBE1;
    color: #fff;
    font-family: PingFangSC-Regular;
  }
</style>