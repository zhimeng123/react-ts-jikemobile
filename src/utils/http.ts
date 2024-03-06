// 封装axios
import axios from "axios";

const httpInstance = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0/',
  timeout: 5000,
})

httpInstance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

httpInstance.interceptors.response.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export { httpInstance }