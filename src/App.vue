<script setup>
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'
import { ref } from 'vue';
// 目标一：APP.vue 渲染(父向子传值：自定义属性)

// 目标二：修改状态

// 定义数据
const list = ref([
  {
    id: 1,
    name: '吃饭',
    done: true,
  },
  {
    id: 2,
    name: '睡觉',
    done: false,
  },
  {
    id: 3,
    name: '打豆豆',
    done: false,
  },
])

// 父组件方法 子组件传方法过来 修改 checked 父组件也修改 数据绑定
const hChangeDone=(id)=>{
 const todo=list.value.find(item=>item.id===id)
 todo.done=!todo.done
}
</script>

<template>
  <section class="todoapp">
    <TodoHeader></TodoHeader>
    <TodoMain :list="list" @changeDone="hChangeDone"></TodoMain>
    <TodoFooter></TodoFooter>
  </section>
</template>

<style></style>
