import request from '@/utils/request'
const login = (data) => {
  return request({ url: '/users/login', method: 'POST', data })
}
const permissionList = () => {
  return request({ url: '/users/getPermissionList', method: 'GET' })
}
//用户列表接口
const userList = (data) => {
  return request({ url: '/users/list', method: 'GET', data })
}
export default {
  login,
  permissionList,
  userList
}
