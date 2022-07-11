import layout from '@/layout'
export default {
  path: '/audit',
  name: 'approve-query',
  meta: {
    title: '审批管理',
    icon: '<send-outlined/>'
  },
  component: layout,
  children: [
    {
      path: '/audit/leave',
      name: 'auditApprove',
      meta: {
        title: '休假申请'
      },
      component: () => import('@/views/audit/leave')
    }
  ]
}
