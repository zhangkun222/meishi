import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      id: 1,
      name: 'liuli',
      avatar: "https://app-file.beitaichufang.com/img/EE11CBB19052E40B07AAC0CA060C23EE/20200825/1598355946892_738X738.jpeg"
    },
  },
  // 同步
  mutations: {
    adminLogin(state, data) {
      state.admin = data;
    },
    recipemsg(state, recipemsg) {
      // state
    }

  },
  // 异步
  actions: {

  },
  modules: {

  }
})
