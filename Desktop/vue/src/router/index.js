import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/index',
    name: 'index',
    component: index,
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/tabs/home.vue')
      },
      {
        path: '/curriculum',
        name: 'curriculum',
        component: () => import('@/views/tabs/curriculum.vue')
      },
      {
        path: '/practice',
        name: 'practice',
        component: () => import('@/views/tabs/practice.vue')
      },
      {
        path: '/record',
        name: 'record',
        component: () => import('@/views/tabs/record.vue')
      },
      {
        path: '/wode',
        name: 'wode',
        component: () => import('@/views/tabs/wode.vue')
      }
    ]
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('@/views/my.vue')
  },
  {
    path: '/fudao',
    name: 'fudao',
    component: () => import('@/views/fudao.vue')
  },
  {
    path: '/sousuo',
    name: 'sousuo',
    component: () => import('@/views/sousuo.vue')
  },
  {
    path: '/teacher',
    name: 'teacher',
    component: () => import('@/views/teacher.vue')
  },
  {
    path: '/books',
    name: 'books',
    component: () => import('@/views/books.vue')
  },
  {
    path: '/bookss',
    name: 'bookss',
    component: () => import('@/views/bookss.vue')
  },
  {
    path: '/liuyan',
    name: 'liuyan',
    component: () => import('@/views/liuyan.vue')
  },
  {
    path: '/myzc',
    name: 'myzc',
    component: () => import('@/views/myzc.vue')
  },
  {
    path: '/shezhi',
    name: 'shezhi',
    component: () => import('@/views/shezhi.vue')
  },
  {
    path: '/userInfo',
    name: 'userInfo',
    component: () => import('@/views/userInfo.vue')
  },
  {
    path: '/xgUser',
    name: 'xgUser',
    component: () => import('@/views/xgUser.vue')
  },
  {
    path: '/sex',
    name: 'sex',
    component: () => import('@/views/sex.vue')
  },
  {
    path: '/myStudy',
    name: 'myStudy',
    component: () => import('@/views/myStudy.vue')
  },
  {
    path: '/collection',
    name: 'collection',
    component: () => import('@/views/collection.vue')
  },
  {
    path: '/Order',
    name: 'Order',
    component: () => import('@/views/Order.vue')
  },
  {
    path: '/coupon',
    name: 'coupon',
    component: () => import('@/views/coupon.vue')
  },
  {
    path: '/card',
    name: 'card',
    component: () => import('@/views/card.vue')
  },
  {
    path: '/vip',
    name: 'vip',
    component: () => import('@/views/vip.vue')
  },
  {
    path: '/rili',
    name: 'rili',
    component: () => import('@/views/rili.vue')
  }

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
