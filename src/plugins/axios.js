import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

// 添加请求拦截器
http.interceptors.request.use(config => config, error => Promise.reject(error))

// 添加响应拦截器
http.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    if (response.status >= 200 || response.status < 300) {
      return response.data
    }

    return response
  },
  error => Promise.reject(error)
)

export default http
