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
    uid:"",
    shop: [{
    }]
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

    addstaenum(state, user, shop_ip) {
      state.shop.forEach(e => {
        if (shop_ip == e.s_id) {
          if (user == 'add') {
            e.num += 1;
          } else if (user == "redc") {
            if (e.num > 1) {
              e.num -= 1;
            }
          }
          else if (user > 0) {
            e.num += user;
          }
        }

        else {
          if (user == 'add') {
            e.num = 1;
          } 
          else if(user > 0) {
            state.shop.push({
              s_id: shop_ip,
              num:user
            })
          }

        }
      });
      console.dir(user)

    },
    clearstatenum(state) {
      state.num = 0;
    }
  },
  //异步动作
  actions: {
    // actions提交的是 mutation，而不是直接变更状态。
    // actions可以包含任意异步操作
    clearnum(store) {
      setTimeout(() => {
        store.commit("clearstatenum")
      }, 5000);
    }
  },
  modules: {

  }
})
