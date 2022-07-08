import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '../layout'

const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('../layout'),
    redirect: '/welcome',
    children: [
      {
        name: 'welcome',
        path: '/welcome',
        meta: { title: '欢迎体验vue3全栈课程' },
        component: () => import('../views/Welcome.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    meta: { title: '登录' },
    component: () => import('../views/login')
  },
  {
    path: '/404',
    name: '404',
    meta: { title: '页面不存在' },
    component: () => import('../views/404')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
