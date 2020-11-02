import Vue from 'vue'
import VueRouter from 'vue-router'
import recipeDesc from "@/components/recipe/recipe_desc.vue"


Vue.use(VueRouter)

const routes = [
  // {
  //   // path: '/',
  //   // component: Home
  // },
  {
    path: '/',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/admin',
    component: () => import('../views/Admin.vue')
  },
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
    path: '/Recipe/recipe_desc',
    component: () => import('@/components/recipe/recipe_desc.vue')
  },
  {
    path: '/Recipe',
    component: () => import('@/views/Recipe.vue')
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
<<<<<<< HEAD
    path: '/addshopping',
    name: 'Addshopping',
    component: () => import("@/views/addshopping.vue"),
  },
=======
    path: '/login',
    component: () => import("@/views/Login.vue")
  }, 
  // {

  //   component: () => import("@/views/Login.vue")
  // },
>>>>>>> cdb33da2d4f63f703d53b0a9de015961c3cf1622
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
<<<<<<< HEAD
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
 
  
=======
    component: () => import("@/components/anime_r_t.vue")

  }

>>>>>>> cdb33da2d4f63f703d53b0a9de015961c3cf1622
]
const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
})
export default router
