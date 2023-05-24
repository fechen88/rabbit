import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@/styles/common.scss'

//import lazy image loading directives
import { lazyPlugin } from './directives'

//test api function
// import { getCategory } from './apis/testAPI'
// getCategory().then(res => console.log(res))
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)

app.mount('#app')