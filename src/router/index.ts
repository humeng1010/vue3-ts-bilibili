import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    name: "home",
    path: "/",
    component: () => import('@/views/Home/Home.vue')
  },
  {
    path: "/video/:id",
    component: () => import('@/views/Video/Video.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
