import { createApp } from 'vue'
import App from './App.vue'

// 导入
import {createPinia} from 'pinia'
const pinia = createPinia()

// use 安装注册插件
createApp(App).use(pinia).mount('#app')
