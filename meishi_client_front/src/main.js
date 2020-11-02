import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
<<<<<<< HEAD
=======
// UI引入
>>>>>>> cdb33da2d4f63f703d53b0a9de015961c3cf1622
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
// 引入axios使用
// 公共的底部
import footerNav from "@/components/recipe/public/footer-nav.vue"
Vue.component("footer-nav", footerNav);

import axios from "axios";
//配置后端服务器地址
axios.defaults.baseURL = "http://localhost:8000"
Vue.prototype.$http = axios;

Vue.config.productionTip = false;
import topmenu from '@/components/Topmenu.vue'
Vue.config.productionTip = false
Vue.component("top-nav", topmenu)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
import topmenu from '@/components/Topmenu.vue'
Vue.component("top-nav", topmenu)
