<template>
  <div id="app">
    <LayoutIndex />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import LayoutIndex from './Layout/index.vue';
export default {
  name: 'App',
  components: {
    HelloWorld,
    LayoutIndex
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
