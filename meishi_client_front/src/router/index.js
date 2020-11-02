import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import("@/views/Home.vue")
  },
  {
    path: '/add',
    name: 'Add',
    component: () => import("@/views/add.vue")
  },
  {
    path: '/addainme',
    name: 'Addainme',
    component: () => import("@/views/addainme.vue")
  },
  {
    path: '/anime_recipe',
    name: 'Anime_recipe',
    component: () => import("@/views/anime_recipe.vue"),
  },
  {
    path: '/addshopping',
    name: 'Addshopping',
    component: () => import("@/views/addshopping.vue"),
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import("@/views/shop.vue")
  },
  {
    path: '/anime_r_t/:Aid',
    name: 'Anime_r_t',
    component: () => import("@/components/anime_r_t.vue")
  },
  {
    path: '/shop_desc/:pid',
    name: 'Shop_desc',
    component: () => import("@/components/shop_desc.vue")
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("@/views/Login.vue")
  },

  {
    path: '/fwb',
    name: 'fwb',
    component: () => import("@/views/fwb.vue")
  },
 
  
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
