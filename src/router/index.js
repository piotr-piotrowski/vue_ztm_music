import About from "@/views/About.vue"
import Home from "@/views/Home.vue"
import Manage from "@/views/Manage.vue"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    name: 'home',
    path: "/",
    component: Home,
  },
  {
    name: 'about',
    path: "/about",
    component: About,
  },
  {
    name: 'manage',
    // alias: '/manage', // redirect over alias
    path: "/manage-music",
    component: Manage,
    beforeEnter: (to, from, next) => {
      console.log('Manage Route Guard');
      next()
    }
  },
  {
    path: '/manage',
    redirect: { name: 'manage'}
  },
  {
    path: '/:catchAll(.*)*',
    redirect: {name: 'home'}
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-yellow-500'
})

router.beforeEach((to, from, next) => {
  console.log('Global Guard');
  next()
})

export default router
