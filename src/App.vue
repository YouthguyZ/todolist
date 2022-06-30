<script setup>
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'

// 一、数据渲染（父传子）
// 二、修改状态（子传父）
// 三、删除数据（根据 id）
// 四、添加数据（）

</script>

<template>
  <section class="todoapp">
    <TodoHeader></TodoHeader>
    <TodoMain></TodoMain>
    <TodoFooter></TodoFooter>
  </section>
</template>

<style></style>
