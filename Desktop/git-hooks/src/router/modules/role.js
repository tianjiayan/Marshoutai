import layout from '@/layout'
export default {
  path: '/system',
  name: 'role-query',
  component: layout,
  meta: {
    title: '系统管理',
    icon: '<setting-outlined />'
  },
  children: [
    {
      path: '/system/role',
      name: 'systemRole',
      meta: {
        title: '角色管理'
      },
      component: () => import('@/views/system/role')
    }
  ]
}
