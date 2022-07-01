<script setup>
// 导入定义的模块 pinia
import useTodosStore from '../store/todos.js';

// 使用 pinia 状态管理数据
const todos=useTodosStore()
</script>

<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li v-for="item in todos.list" :key="item.id" :class="{completed:item.done}">
        <div class="view">
          <input @change="todos.changeDone(item.id)" class="toggle" type="checkbox" :checked="item.done" />
          <label>{{item.name}}</label>
          <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template" />
      </li>
     
    </ul>
  </section>
</template>

<style lang="less" scoped></style>
