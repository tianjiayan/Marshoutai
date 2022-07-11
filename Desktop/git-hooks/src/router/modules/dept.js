import layout from '@/layout'
export default {
  path: '/system',
  name: 'dept-query',
  component: layout,
  meta: {
    title: '系统管理',
    icon: '<setting-outlined />'
  },
  children: [
    {
      path: '/system/dept',
      name: 'systemDept',
      meta: {
        title: '部门管理'
      },
      component: () => import('@/views/system/dept')
    }
  ]
}
