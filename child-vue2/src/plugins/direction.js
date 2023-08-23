import Vue from 'vue';

Vue.directive("resize",{
  
  inserted: function(el, binding){
    // 因为通过监听函数onResize 响应， 所以先监听回调函数
    const callback = binding.value;
    // 获取指令的参数
    const direction = binding.arg;
    

    const result = ()=>{
      return direction === 'vertical' ? window.innerHeight : window.innerWidth
    }

    // 然后监听resize， 窗口是否变化， 获取width
    window.addEventListener('resize', ()=>callback(result()));
    
    // 获取一个包含修饰符的对象
    const modifiers = binding.modifiers;
    if(modifiers && !modifiers.quiet){
      callback(result())
    }

    // 将这个方法绑定在el上，因为除了el， 其他的参数都不可以改变， 所以可以将回调函数绑定在el上
    el._onResize = callback();
  },
  unbind:function(el, binding){
    // 解绑的时候 将毁掉函数销毁
    if(!el._onResize) return;
    // 监听事件resize也移除掉
    window.removeEventListener('resize', el._onResize)
    delete el._onResize;
  }
})

