import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/admin',
    component: () => import('../views/Admin.vue')
  }
  
]

const router = new VueRouter({
  routes
})

export default router
