import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router';
import Container from '/@/components/Container/index.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Container,
    children: [
      // {
      //   path: '/',
      //   redirect: "/home",
      // },
      {
        path: '/',
        name: 'home',
        component: () => import('/@/views/home/index.vue'),
      },
      // {
      //   path: '/menu',
      //   component: () => import('/@/views/menu/index.vue')
      // },
      {
        path: '/formCom',
        name: 'formCom',
        component: () => import('/@/views/components/form/index.vue'),
        meta: {
          isMenu: true
        }
      },
      {
        path: '/tableCom',
        name: 'tableCom',
        component: () => import('/@/views/components/table/index.vue'),
        meta: {
          isMenu: true
        }
      },
      {
        path: '/listCom',
        name: 'listCom',
        component: () => import('/@/views/components/list/index.vue'),
        meta: {
          isMenu: true
        }
      },
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/error'
  },
  {
    path: '/error',
    name: 'error',
    component: () => import('/@/views/errorPage/index.vue')
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes as unknown as RouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export default router