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
  // {
  //   path: '/',
  //   redirect: "/Recipe/recipe_desc",
  //   // component: () => import('@/components/recipe/recipe_desc.vue')
  //   component: recipeDesc,
  // },
  {
    path: '/Recipe',
    component: () => import('@/views/Recipe.vue'),
    children: [
      {
        path: 'recipe_desc',
        component: () => import('@/components/recipe/recipe_desc.vue')
      },
    ],
  },

]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
