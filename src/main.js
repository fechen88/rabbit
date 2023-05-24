import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@/styles/common.scss'

import { useIntersectionObserver } from '@vueuse/core'

//test api function
// import { getCategory } from './apis/testAPI'
// getCategory().then(res => console.log(res))
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

//global directive config
app.directive('img-lazy',{
    mounted(el,binding){
        //el: element to bind
        //binding: binding.value which is the value berhind =
        console.log(el,binding.value)
        useIntersectionObserver(
            el,
            ([{ isIntersecting }]) => {
                console.log(isIntersecting)
                if (isIntersecting){
                    //entering window
                    el.src = binding.value
                }
            },
        )
    }
})
