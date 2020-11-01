import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';



import axios from "axios";
//配置后端服务器地址
axios.defaults.baseURL="http://localhost:8000"
Vue.prototype.$http=axios;

Vue.config.productionTip = false;

Vue.use(ElementUI);

import topmenu from '@/components/Topmenu.vue'
Vue.config.productionTip = false
Vue.component("top-nav", topmenu)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
