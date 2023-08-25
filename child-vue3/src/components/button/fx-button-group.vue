<template>
  <div class="btn-group" >
    <slot></slot>
  </div>
</template>

<script lang='ts' setup>

import {useAttrs} from 'vue'

const attrs = useAttrs()
console.log(attrs);

</script>

<style lang='scss' scoped>
.btn-group{
  display: flex;
  align-content: center;
  justify-content: flex-end;
  padding: 40px 28px;
  background-color: #fff;
  // .btn{
  //   width: 100%;
  //   height: 88px;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   border-radius: 16px;
  //   font-size: 32px;
  //   font-family: PingFangSC-Regular;
  //   text-align: center;
  // }
  // .btn-default{
  //   border: 1px solid #e3e3e3;
  //   color: #7F7F7F;
  //   font-family: PingFangSC-Regular;
  // }
  // .btn-primary{
  //   background-color: #08CBE1;
  //   color: #fff;
  //   font-family: PingFangSC-Regular;
  // }
}
</style>