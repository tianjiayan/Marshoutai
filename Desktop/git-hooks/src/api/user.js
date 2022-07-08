import request from '@/utils/request'
const login = (data) => {
  return request({ url: '/users/login', method: 'POST', data })
}
const getMenuList = (params) => {
  return request({ url: '/leave/count', method: 'GET', data: {} })
}
export default {
  login,
  getMenuList
}
