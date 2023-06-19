//管理用户相关
import { defineStore } from 'pinia'
import {loginAPI} from '@/apis/user'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
    //1.定义管理用户数据的State
    const userInfo = ref({})
    //2.定义获取接口数据的Action函数
    const getUserInfo = async ({ account, password }) => {
        const res = await loginAPI({ account, password })
        userInfo.value = res.result
    }
    //3.退出时清除用户信息
    const clearUserInfo = () => {
        userInfo.value = {}
    }
    //3.以对象格式把state和action return
    return { userInfo, getUserInfo, clearUserInfo }
},{
    persist: true,
})
