import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/admin',
    component: () => import('../views/Admin.vue')
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
    path: '/login',
    component: ()=>import("@/views/Login.vue")
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
    path: '/shop_desc/:Aid',
    name: 'Shop_desc',
    component: () => import("@/components/anime_r_t.vue")

  }
  
]

const router = new VueRouter({
  routes,
})

export default router
