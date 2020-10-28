import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/self',
    name: 'Self',
    component: ()=>import("@/views/Self.vue")
  },
  {
    path: '/user',
    name: 'User',
    component: ()=>import("@/views/User.vue")
  },
  {
    path: '/add',
    name: 'Add',
    component: ()=>import("@/views/add.vue")
  },


  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //引入路由组件懒加载(按需加载) babel 插件编译import()语法
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')//@代表src目录
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
