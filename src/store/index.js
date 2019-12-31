import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headText: '首页',
  },
  mutations: {
    setHeadText(state, str) {
      state.headText = str;
    }
  },
  actions: {
  },
  modules: {
  }
})
