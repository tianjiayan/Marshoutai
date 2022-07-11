import layout from '@/layout'

export default {
  path: '/audit',
  name: 'approve-query',
  meta: {
    title: '审批管理',
    icon: '<send-outlined />'
  },
  component: layout,
  children: [
    {
      path: '/audit/approve',
      name: 'auditApprove',
      meta: {
        title: '待审批'
      },
      component: () => import('@/views/audit/approve')
    }
  ]
}
