import { createRouter, createWebHistory } from 'vue-router'
import EmploymentView from '../views/EmploymentView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'employment',
      component: EmploymentView
    },
    // {
    //   path: '/crypto',
    //   name: 'crypto',
    //   component: () => import('../views/CryptoView.vue')
    // },
    // {
    //   path: '/projects',
    //   name: 'projects',
    //   component: () => import('../views/ProjectsView.vue')
    // }
  ]
})

export default router
