<script setup>
import useTodosStore from '../store/todos';

const todos=useTodosStore()

</script>

<template>
  <footer class="footer">
    <span class="todo-count"><strong>{{todos.leftCount}}</strong>个待做项</span>
    <ul class="filters">
      <li v-for="item in todos.filter" :key="item">
        <a @click="todos.changeActive(item)" :class="{selected:item===todos.active}" href="#/">{{item}}</a>
      </li>
      
    </ul>
    <button class="clear-completed" @click="todos.clear">清除已完成</button>
  </footer>
</template>

<style lang="less" scoped></style>
