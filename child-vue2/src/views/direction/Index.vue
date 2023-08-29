<template>
  <div class="direction-box">
    1. v-resize 指令， 监听浏览器窗口大小的改变， 通过监听函数onResize 响应
    <div class="html"  v-text="html1"></div>
    2、可通过direction 控制监听页面高度或者宽度的变化
    <div class="html"  v-text="html2"></div>

    3、可通过修饰符 .quiet 来控制是否在指令初始化的时候，响应onResize 函数
    <div class="html"  v-text="html2"></div>

    <div v-resize:[direction].quiet="onResize"> window width is : {{ length }} px </div>
    <button type="default" @click="showNotify">
      showNotify
    </button>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      direction: "vertical",
      length: 0,
      html1: '<div v-resize="onResize"> window width is : {{ length }} </div>',
      html2: '<div v-resize:[direction].quiet="onResize"> window width is : {{ length }} </div>',
      html3: '<div v-resize.quiet="onResize"> window width is : {{ length }} </div>',
    }
  },
  methods: {
    onResize(length){
      
      this.length = length;
    },
    showNotify(){
      this.$notify('展示弹框')
    }
  }
}
</script>

<style lang="less" scoped>
.direction-box{
  font-size: 16px;
  line-height: 1.5;
}
.html{
  margin-bottom: 30px;
}
</style>