import { createRouter, createWebHistory } from 'vue-router'
import Compras from '../views/Compras.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Compras,
    },
  ],
})

export default router
