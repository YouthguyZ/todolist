<script setup>
import useTodosStore from '../store/todos'
const todos=useTodosStore()
</script>

<template>
  <section class="main">
    <input :checked="todos.isAll" @change="todos.checkAll(!todos.isAll)" id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li v-for="item in todos.list" :key="item.id" :class="{completed:item.done}">
        <div class="view">
          <input @change="todos.hChangeDone(item.id)" class="toggle" type="checkbox" :checked="item.done" />
          <label>{{item.name}}</label>
          <button class="destroy" @click="todos.del(item.id)"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template" />
      </li>
     
    </ul>
  </section>
</template>

<style lang="less" scoped></style>
