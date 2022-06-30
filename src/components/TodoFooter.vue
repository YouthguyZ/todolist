<script setup>
import useTodosStore from '../store/todos';

const todos=useTodosStore()

</script>

<template>
  <footer class="footer">
    <span class="todo-count"><strong>{{todos.leftCount}}</strong>个待做项</span>
    <ul class="filters">
      <li>
        <a class="selected" href="#/">全部</a>
      </li>
      <li>
        <a href="#/active">未完成</a>
      </li>
      <li>
        <a href="#/completed">已完成</a>
      </li>
    </ul>
    <button class="clear-completed" @click="todos.clear">清除已完成</button>
  </footer>
</template>

<style lang="less" scoped></style>
