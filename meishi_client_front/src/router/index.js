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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/recipe',
    component: () => import('../views/Recipe.vue')
  }
  ,
  {
    path: '/anime',
    component: () => import('../views/Anime.vue')
  }
  ,
  {
    path: '/menu',
    component: () => import('../views/Menu.vue')
  }
  ,
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  }
  ,
  {
    path: '/reg',
    component: () => import('../views/Reg.vue')
  }
  
]

const router = new VueRouter({
  routes
})

export default router
