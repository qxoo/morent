import AppVue from '@/App.vue'
import test from '@/views/test.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: AppVue
  },
  {
    path: '/test',
    name: 'test',
    component: test
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
