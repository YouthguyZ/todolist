<script setup>
// 接收父组件值
defineProps({
  list:{
    type:Array,
    required:true
  }
})
// 子向父传值 自定义方法
const emit =defineEmits(['changeDone','del'])

// 定义方法
const hChange=(id)=>{
  // console.log('打印');
  emit('changeDone',id)
}
</script>

<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li v-for="item in list" :key="item.id" :class="{completed:item.done}">
        <div class="view">
          <input class="toggle" type="checkbox" @change="hChange(item.id)" :checked="item.done" />
          <label>{{item.name}}</label>
          <button class="destroy" @click="emit('del',item.id)"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template" />
      </li>
      
    </ul>
  </section>
</template>

<style lang="less" scoped></style>
