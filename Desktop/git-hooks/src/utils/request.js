import axios from 'axios'
import loading from './loading'
import store from '@/store'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
  //   headers: { 'X-Custom-Header': 'foobar' }
})

// 添加请求拦截器
service.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么

    const token = store.getters.token
    if (token) config.headers.Authorization = 'Bearer ' + token

    loading.open()
    return config
  },
  function (error) {
    // 对请求错误做些什么

    loading.close()
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么

    loading.close()
    return response.data
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么

    loading.close()
    return Promise.reject(error)
  }
)

//处理get传参
const request = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  return service(options)
}

export default request
