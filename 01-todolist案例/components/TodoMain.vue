<script setup>
import { computed } from 'vue';
// 接收父组件值
const props = defineProps({
  list:{
    type:Array,
    required:true
  }
})
// 子向父传值 自定义方法
const emit =defineEmits(['changeDone','del','changeAll'])

// 定义方法
const hChange=(id)=>{
  // console.log('打印');
  emit('changeDone',id)
}

// 全选反选 计算属性
const isAll =computed({
  get(){
    return props.list.every(item=>item.done)
  },
  // 修改时
  set(val){
    emit('changeAll',val)
  }
})
</script>

<template>
  <section class="main">
    <input v-model="isAll" id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li v-for="item in list" :key="item.id" :class="{completed:item.done}">
        <div class="view">
          <input class="toggle" type="checkbox" @change="hChange(item.id)" :checked="item.done" />
          <label>{{item.name}}</label>
          <button class="destroy" @click="emit('del',item.id)"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template" />
      </li>
      
    </ul>
  </section>
</template>

<style lang="less" scoped></style>
