// 导入定义store
import {defineStore} from 'pinia'
// 创建使用
const useTodosStore=defineStore('todos',{
  state:()=>{
    return {
      list:[
        {id:1,name:'吃饭',done:false},
        {id:2,name:'睡觉',done:false},
        {id:3,name:'打球',done:false}
      ]
    }
  }
})

// 导出
export default useTodosStore