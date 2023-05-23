//axios config
import axios from 'axios'

const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

// Add a request interceptor
httpInstance.interceptors.request.use(config => {
    return config;
  }, error => Promise.reject(error));

// Add a response interceptor
httpInstance.interceptors.response.use(response => response.data, error => Promise.reject(error));

export default httpInstance