<script lang='tsx'>
import {defineComponent,useAttrs } from 'vue'
export default defineComponent({
  
  name: 'fx-button',
  setup(props,ctx){
    console.log(ctx.slots.default())
    const attrs = useAttrs()
    return ()=>(
      <button class="btn btn-default" v-on="attrs">{ctx.slots.default()}</button>
    )
  },
  // render(){
  //   return (
  //     <button class="btn btn-default" v-on="attrs">{ctx.slots.default()}</button>
  //   )
  // }
})

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

