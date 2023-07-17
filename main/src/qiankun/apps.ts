// 此时还没有微应用，所以apps为空

const apps:any = [
  /**
   * name: 微应用名称 - 具有唯一性
   * entry: 微应用入口 - 通过该地址加载微应用
   * container: 微应用挂载节点 - 微应用加载完成后将挂载在该节点上
   * activeRule: 微应用触发的路由规则 - 触发路由规则后将加载该微应用
   */
  {
    name: "child-vue3",
    entry: "//localhost:8001", ////默认会加载这个html,解析里面的js,动态执行（子应用必须支持跨域）里面,是用fetch去请求的数据
    container: "#subApp",  //挂载到主应用的哪个元素下
    activeRule: "/vue",//当我劫持到路由地址为/vue2时，我就把http://localhost:8001这个应用挂载到#subApp的元素下
    props:{}, // 给子应用传递数据
  }
];
export default apps;

