import axios from 'axios'
import store from '@/store'
import { getToken } from '@/utils/auth'
import router from '@/router'

// 创建一个AXIOS实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000 // 请求超时
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 在请求发送之前做某事
    let token = getToken();
    if (token) {
      // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
      config.headers.common['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    // 用请求错误做某事
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    // console.log(response.data)
    if(response.data.code==200) {
      return response.data
    }else if(response.data.code==401){
      store.dispatch('FedLogOut')
      router.replace({
        path: '/login',
        query: {redirect: router.currentRoute.fullPath}
      })
      return Promise.reject(response.data)
    }else {
      return Promise.reject(response.data)
    }
  },
  error => {
    var data = {
      message: error.message
    }
    return Promise.reject(data)
  }
)

export default service