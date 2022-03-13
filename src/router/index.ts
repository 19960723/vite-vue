import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/home/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue') 
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('@/views/components/form/index.vue') 
  },
  {
    path: '/table',
    name: 'table',
    component: () => import('@/views/components/table/index.vue') 
  }
]

const Router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default Router