import layout from '@/layout'

export default {
  path: '/system',
  name: 'user-query',
  redirect: '/system/user',
  component: layout,
  meta: {
    title: '系统管理',
    icon: '<setting-outlined />'
  },
  children: [
    {
      path: '/system/user',
      name: 'systemUser',
      meta: {
        title: '用户管理'
      },
      component: () => import('@/views/system/user')
    }
  ]
}
