<script setup>
import useTodosStore from '../store/todos';

const todos=useTodosStore()

</script>

<template>
  <footer class="footer">
    <span class="todo-count"><strong>{{todos.leftCount}}</strong>个待做项</span>
    <ul class="filters">
      <li>
        <a class="selected" href="#/">All</a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>
    <button class="clear-completed">Clear completed</button>
  </footer>
</template>

<style lang="less" scoped></style>
