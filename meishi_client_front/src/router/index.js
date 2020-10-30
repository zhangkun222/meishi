import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
<<<<<<< HEAD
    path: '/',
    component: Home
  },
  {
    path: '/admin',
    component: () => import('../views/Admin.vue')
=======
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
    path: '/login',
    component: ()=>import("@/views/Login.vue")
  },{
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
    path: '/shop_desc/:Aid',
    name: 'Shop_desc',
    component: () => import("@/components/anime_r_t.vue")
>>>>>>> 1a5e68b6391e9c7b5e4c232f484e3593ad8482c6
  }
  
]

const router = new VueRouter({
  routes
})

export default router
