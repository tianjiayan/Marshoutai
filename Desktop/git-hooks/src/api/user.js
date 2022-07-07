import request from '@/utils/request'
const login = (data) => {
  return request({ url: '/users/login', method: 'POST', data })
}
export default {
  login
}
