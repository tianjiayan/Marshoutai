

import Fetch  from "../utils/fetch"
import Request  from "../utils/request"


// 统一接口文件配置

// 首页轮播图接口    axios实现

// export  const   banner =  () => Fetch.get("/banner")
export  const   banner =  () => Request({
    url:"/api/banner",
    headers:{
        DeviceType: "H5"
    }
})

// 首页接口
// export  const   cartList =  () => Fetch.get("/recommend/appIndex")
export  const   cartList =  () => Request({
   url: "/api/recommend/appIndex",

})


// // 轮播图接口
// export const tu = () =>Request({
//     url:"http://120.53.31.103:84/api/app/banner",
//     method:"get"
// })

//特色课接口
export const tu = (params) =>Request({
    url:"/api/courseBasis",
    method:"get",
    params
})

/**
 * 登录注册接口
 */

import fetch from '../utils/fetch'



/**
 * 登录接口
 */
export const getLogin = (data) => fetch.post('/login', data)


/**
 * 设置密码
 */
export const getpassword = (data) => fetch.post('/password', data)



/**
 * 获取验证码
 */
export const getCode = (data) => fetch.post('/smsCode', data)

// 课程详情接口
// export const  courceId = (data) => Fetch.get(`/courseInfo/basis_id=${data}`)

// 获取用户信息
export const userInfo =() =>Fetch.get('/userInfo')


// 修改用户信息
export const xgUser = (data)=>Fetch.put('/user',data)


// 关注讲师接口
export const guan = (id) =>Fetch.get(`/teacher/collect/${id}`)

// 我的学习
export const myStudy=(data)=>Fetch.get('/collect',data)

// 收藏
export const collection=(data)=>Fetch.post('/collect',data)


// 取消收藏
export const no =(id)=>Fetch.put(`/collect/cancel/${id}/1`)

// 收藏列表
export const collections=(data)=>Fetch.get('/collect',data)


export const getTeacher = (id) =>Fetch.get(`/teacher/${id}`)
