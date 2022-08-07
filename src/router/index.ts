import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/default/index.vue'),
      children:[
        {
          path: 'test',
          component: () => import('@/components/TestComponnet/index.vue'),
        }
      ]
    },
    {
      path: '/test',
      component: () => import('@comps/TestComponnet/index.vue')
    },
  ]
})
export default router