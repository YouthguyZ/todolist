<script setup>
import { ref } from 'vue';

// 定义添加数据名
const taskName=ref('')
// 定义方法
const emit=defineEmits(['add',])
const keydown=()=>{
  if(taskName.value.length===0)return 
  // console.log('添加');
  emit('add',taskName.value)
  // 清空输入表单
  taskName.value=''
}


</script>

<template>
  <header class="header">
    <h1>todos</h1>
    <input  @keydown.enter="keydown" v-model.trim="taskName" class="new-todo" placeholder="What needs to be done?" autofocus />
  </header>
</template>

<style lang="less" scoped></style>
