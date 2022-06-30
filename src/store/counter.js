import {defineStore} from 'pinia'
const useCounterStore = defineStore('counter',{
  state:()=>{
    return {
      num:200
    }
  },
  actions:{
    add(){
      this.num+=100
    }
  }
})

// 默认导出
export default useCounterStore