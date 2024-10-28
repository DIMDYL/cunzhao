import axios from 'axios'
const request = axios.create({
  baseURL: 'http://101.43.183.102:1027/api'
})
request.interceptors.request.use(
  (config) => {
    return config
  },
  (e) => {
    return Promise.reject(e)
  }
)
//  服务器响应
request.interceptors.response.use(
  (res) => {
    if (res.config.method === 'get') {
      return res.data
    }
    const data = res.data
    if (data.code === 0) {
      ElMessage.error(data.msg)
    }
    return res.data
  },
  (e) => {
    ElMessage.error('服务器异常，请稍后重试！')
    // setTimeout(() => {
    //   history.go(0)
    // }, 1000)
  }
)
export default request
