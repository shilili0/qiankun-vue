import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  // 定义，相当于data
  state: {
    count: 0
  },
  //  相当于watch
  getters: {
    doubleCount: (state)=>state.count * 2
  },
  // 同步方法
  mutations: {
    addCount: (state, step = 1)=>{
      console.log(state, step);
      state.count = state.count + step
      console.log(state);
    },
    doubleAddCount: (state)=>{
      state.count = state.count * 2
    }
  },
  // 异步方法
  actions: {
    asyncAddCount: ({commit}, state)=>{
      setTimeout(()=>{
        commit('addCount',3)
      },2000)
    },
    asyncDoubleCount: ({commit}, state)=>{
      setTimeout(()=>{
        commit('doubleCount',3)
      },2000)
    }
  }

})
