import axios from 'axios'
import { ElMessage } from 'element-plus'

/**
 * 自定义axios
 */
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

/**
 * 配置请求拦截器
 */
service.interceptors.request.use(
  (config) => {
    config.headers.Authorization = localStorage.getItem('token') // 获取token
    return config
  },
  (err) => {
    return Promise.reject(new Error(err))
  }
)

/**
 * 添加响应拦截器
 */
service.interceptors.response.use((response) => {
  const { data, meta } = response.data
  if (meta.status === 200 || meta.status === 201) {
    return data
  } else {
    ElMessage.error(meta.msg)
    return Promise.reject(new Error(meta.msg))
  }
},
(err) => {
  err.response && ElMessage.error(err.response.data)
  return Promise.reject(new Error(err.response.data))
})

export default service
