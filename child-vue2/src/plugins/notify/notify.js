/* 
实现一个vue插件，使得：
  1、能够通过Vue.use(这个插件)
  2、并且可以在任意vue组件中，使用this.$notify 来在页面上生成一个提示框；
  3、且this.$notify 可以传入自定义模版作为参数并显示在提示框中。
*/
// vue2 中注册插件
import notifyModal from './Index.vue'
import Vue from 'vue';
export default  {
  install(Vue, options){
    console.log('我的插件',options);
    // 添加全局方法
    // Vue.myClobalMethod = function(){
    // }
    // // 添加全局指令
    // Vue.directive('my-directive',{
    // })
    // // 添加全局过滤器
    // Vue.filter('my-filter', function(value){
    // })
    // // 添加全局混入
    // Vue.mixin({
    // })

    // 添加实例方法
    // msg 要提示的内容
    Vue.prototype.$notify = function(msg,option = {delay: 3000}){
      console.log("notify", msg);
      if(notifyModal.el) return;
      options = {...option, ...options};
      let v = Vue.extend(notifyModal);
      let vm = new v;
      let oDiv = document.createElement('div');
      vm.$mount(oDiv);
      vm.value = msg;
      document.body.appendChild(vm.$el);
      notifyModal.el = vm.$el;
      setTimeout(()=>{
        document.body.removeChild(vm.$el);
        notifyModal.el = null
      },options.delay)

    }

  }
}
// 使用插件
// Vue.use(myPlugin, {option: 'value'})