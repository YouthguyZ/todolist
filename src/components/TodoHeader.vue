<script setup>
// 导入 store 状态管理库
import { ref } from 'vue';
import useTodosStore from '../store/todos';
// 使用
const todos=useTodosStore()

// 定义响应式数据为添加内容
const task=ref('')
const hKeydown=()=>{
  // console.log('变了');
  // 输入不得为空
  if(task.value.length===0)return
  todos.list.push({
    id:Date.now(),
    name:task.value,
    done:false
  })
  // 输入完后清空表单
  task.value=''
}
</script>

<template>
  <header class="header">
    <h1>todos</h1>
    <input @keydown.enter="hKeydown" v-model.trim="task" class="new-todo" placeholder="What needs to be done?" autofocus />
  </header>
</template>

<style lang="less" scoped></style>
