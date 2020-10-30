import Vue from 'vue'
import VueRouter from 'vue-router'
import recipeDesc from "@/components/recipe/recipe_desc.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/add',
    name: 'Add',
    component: () => import("@/views/add.vue")
  },
  {
    path: '/',
    redirect: "/Recipe/recipe_desc",
    // component: () => import('@/components/recipe/recipe_desc.vue')
    component: recipeDesc,
  },
  {
    path: '/Recipe/recipe_desc',
    component: () => import('@/components/recipe/recipe_desc.vue')
  },
  {
    path: '/Recipe',
    component: () => import('@/views/Recipe.vue')
  },

]
const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})
export default router
