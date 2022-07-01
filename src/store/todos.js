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
  actions:{
    // 修改状态 因为子组件不能直接修改组件状态数据
    changeDone(id){
      // find 方法将相同的挑出来
      const todo=this.list.find(item=>item.id===id)
      // 取反赋值
      todo.done=!todo.done
    },
    // 删除数据
    del(id){
      this.list=this.list.filter(item=>item.id!==id)
    }
  },
  // 计算属性
  getters:{

  }
})

// 默认导出 useTodosStore
export default useTodosStore