<template>
  <div class="notify-box">我是弹框notify {{ value }}</div>
</template>

<script>
export default {
  name: '',
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.notify-box{
  position: absolute;
  padding: 20px;
  background-color: #ccc;
  font-size: 20px;
  color: #151515;
  left: 50%;
  top: 50%;
  border-radius: 8px;;
}
</style>