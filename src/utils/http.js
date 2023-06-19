//axios config
import axios from 'axios'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { useUserStore } from '@/stores/user'
import router from '@/router'

const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

// Add a request interceptor
httpInstance.interceptors.request.use(config => {
    //1.从pinia获取token
    const userStore = useUserStore()
    //2.按后端要求拼接token
    const token = userStore.userInfo.token
    if (token){
      config.headers.Authorization = `Bearer ${token}`
    }
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
  //401 token expire handle
  //1.清除本地数据
  //2.跳转登录页
  const userStore = useUserStore()
  if (error.response.status === 401){
    userStore.clearUserInfo()
    router.push('/login')
  }

  return Promise.reject(error)
});

export default httpInstance