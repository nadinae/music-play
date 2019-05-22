import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  name:'张三',
  age:'16'
}

const getters = {
  isName(state){
    return state.name
  },
  isAge(state){
    return state.age
  }
}

const mutations = {
  changeName(state){
    return state.name = '李四';
  },
  changeAge(state){
    return state.age = '11111111'
  }
}

const actions = {
  ctrChangeName(context){
    return context.commit('changeName')
  },
  ctrChangeAge(context){
    return context.commit('changeAge')
  }
}

const store = new Vuex.Store({
  getters,
  state,
  mutations,
  actions
})

export default store
