```javascript```
Vue.directive("direction-demo",{
  // bind 只调用一次， 指令第一次绑定到元素时调用
  // 在这里可以进行一次初始化设置。
  // 此时 el.parentNode 为null
  bind: function(el, binding, vnode){},

  // 被绑定元素插入父节点时调用
  // (仅保证父节点存在，但不一定已被插入文档中)。
  // inserted 中可以通过 el.parentNode 访问当前节点的父节点
  inserted: function(el,binding,vnode){},

  // 所在组件的VNode 更新时调用
  // 但是可能发生在其子VNode更新之前
  // 指令的值肯呢个发生了改变，也可能没有
  // 但是可以通过比较更新前后的值来忽略不必要的模版更新
  update: function(el,binding,vnode, oldVnode){},

  // 指令所在组件的vnode机器子vnode全部更新后调用
  componentUpdated:function(el,binding,vnode, oldVnode){},

  // 只调用一次，指令与元素解绑时调用。
  unbind: function(el,binding,vnode){}
})
```