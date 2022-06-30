// 导入定义store
import {defineStore} from 'pinia'
// 创建使用
const useTodosStore=defineStore('todos',{
  state:()=>{
    return {
      // list:[
      //   {id:1,name:'吃饭',done:true},
      //   {id:2,name:'睡觉',done:false},
      //   {id:3,name:'打球',done:false}
      // ],

      // 取本地存储
      list:JSON.parse(localStorage.getItem('todos')||'[]'),
      filter:['全部','未完成','已完成'],
      active:'全部'
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
    },
    // 添加数据 在 toheader 中完成

    // 全选与反选 (不清晰)
    checkAll(val){
      console.log(val);
      this.list.forEach(item=>item.done=val)
    },
    // 清除已完成
    clear(){
      this.list=this.list.filter(item=>!item.done)
    },
    // 切换状态
    changeActive(active){
      this.active=active
    }

  },

  // 派生 计算机属性
  getters:{
    // 是否选中
    // every 遍历所有数据 都为 true 则为 true
    isAll(){
     return this.list.every(item=>item.done)
    },
    leftCount(){
      return this.list.filter(item=>!item.done).length
    },
    // 底部筛选功能
    showList(){
      if(this.active==='未完成'){
        return this.list.filter(item=>!item.done)
      }else if(this.active==='已完成'){
        return this.list.filter(item=>item.done)
      }else{
        return this.list
      }
    }
  }
})

// 导出
export default useTodosStore