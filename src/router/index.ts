import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/test',
      component: () => import('@comps/TestComponnet/index.vue')
    },
    {
      path: '/home',
      component: () => import('@views/Home/index.vue')
    }
  ]
})
export default router