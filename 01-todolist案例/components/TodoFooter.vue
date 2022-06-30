<script setup>
import { computed } from 'vue';

// 接收数据  解构 props 出 list
const {list}=defineProps({
  list:{
    type:Array
  }
})

// 计算属性 list 修改后变化
const leftCount=computed(()=>{
  // 剩余未做事件 过滤出 done 为 false 事件 然后得出长度就为剩余未完成事件
  return list.filter(item=>!item.done).length
})
</script>

<template>
  <footer class="footer">
    <span class="todo-count"><strong>{{leftCount}}</strong> item left</span>
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
