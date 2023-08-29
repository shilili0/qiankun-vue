<template>
  <div>
    <button  @click="addCount(3)" > 点击btn {{ count }}</button>
   
    <!-- double -->
    <button  @click="asyncAddCount" > 异步点击btn {{ count }}</button>
    <button  @click="doubleAddCount" > 点击btn{{ doubleCount }}</button>
    {{ count }}- {{ doubleCount }}
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState, mapMutations} from 'vuex'
export default {
  name: '',
  data() {
    return {

    }
  },
  computed: {
    ...mapState({
      count: state=>{
        console.log(state.count);
        return state.count
      }
    }),
    ...mapGetters(['doubleCount']),
  },
  methods: {
    ...mapMutations(['addCount','doubleAddCount']),
    ...mapActions(['asyncAddCount'])

  }
}
</script>

<style lang="less" scoped>

</style>