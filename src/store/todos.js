// 导入定义store
import {defineStore} from 'pinia'
// 创建使用
const useTodosStore=defineStore('todos',{
  state:()=>{
    return {
      list:[
        {id:1,name:'吃饭',done:true},
        {id:2,name:'睡觉',done:false},
        {id:3,name:'打球',done:false}
      ]
    }
  },
  // 修改数据
  actions:{
    // 修改状态
    hChangeDone(id){
      // find 数组方法
     const todo= this.list.find(item=>item.id===id)
     // 取反状态
      todo.done=!todo.done

    },
    // 删除数据
    del(id){
      // filter 筛选数组方法
      this.list=this.list.filter(item=>item.id!==id)
    }
    // 添加数据 在 toheader 中完成

  },
  getters:{

  }
})

// 导出
export default useTodosStore