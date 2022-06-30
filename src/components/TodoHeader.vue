<script setup>
import { ref } from 'vue';
import useTodosStore from '../store/todos';

const todos=useTodosStore()
// 定义输入数据 表单中双向绑定
const task=ref('')
const hKeydown=()=>{
  // console.log('keydown');
  // 判断输入值不可为空，否则不执行
  if(task.value.length===0)return
  todos.list.push({
    id:Date.now(),
    name:task.value,
    done:false,
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
