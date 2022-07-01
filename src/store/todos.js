// 定义 store
import {defineStore} from 'pinia'

// 创建 对象
const useTodosStore =defineStore('todos',{
  state:()=>{
    return{
      list:[
        {id:1,name:'xiba',done:true},
        {id:2,name:'lll',done:false},
        {id:3,name:'xxx',done:false}
      ]
    }
  },
  // 同步与异步方法
  actions:()=>{

  },
  // 计算属性
  getters:()=>{

  }
})

// 默认导出 useTodosStore
export default useTodosStore