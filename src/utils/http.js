//axios config
import axios from 'axios'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'

const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

// Add a request interceptor
httpInstance.interceptors.request.use(config => {
    return config;
  }, error => Promise.reject(error));

// Add a response interceptor
httpInstance.interceptors.response.use(response => response.data, error => {
  //统一错误提示
  //console.log(error)
  ElMessage({
    type: 'warning',
    message: error.response.data.message
  })
  return Promise.reject(error)
});

export default httpInstance