import layout from '@/layout'
export default {
  path: '/system',
  name: 'menu-query',
  component: layout,
  meta: {
    title: '系统管理',
    icon: '<setting-outlined />'
  },
  children: [
    {
      path: '/system/menu',
      name: 'systemMenu',
      meta: {
        title: '菜单管理'
      },
      component: () => import('@/views/system/menu')
    }
  ]
}
