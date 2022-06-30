import { createApp } from 'vue'
import App from './App.vue'

// 1.vue-router 导入 vue-router
import {createRouter,createWebHashHistory} from 'vue-router'

// 2.配置路由表
const routes=[
  // 路由懒加载
  {path:'/home',component:()=>import('./views/Home.vue')},
  {path:'/login',component:()=>import('./views/Login.vue')}
]

// 3.创建路由对象
const router = createRouter({
  routes,
  // 4.指定路由模式（必须）
  history:createWebHashHistory()
})



// 链式调用
// 5.use 安装注册插件
createApp(App).use(router).mount('#app')
