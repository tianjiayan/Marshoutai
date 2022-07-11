import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '../layout'
import user from './modules/user'
import menu from './modules/menus'
import role from './modules/role'
import dept from './modules/dept'
import leave from './modules/leave'
import approve from './modules/approve'

//公有路由
export const publicRoutes = [
  {
    path: '/',
    name: 'layout',
    component: layout,
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        name: 'welcome',
        meta: {
          title: '欢迎体验Vue3全栈课程'
        },
        component: () => import('@/views/other/welcome')
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
//私有路由
export const prviteRoutes = [user, menu, role, dept, leave, approve]
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes,...prviteRoutes]
})

export default router
