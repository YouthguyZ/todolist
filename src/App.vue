<script setup>
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'
import { ref } from 'vue';
// 目标一：APP.vue 渲染(父向子传值：自定义属性)

// 目标二：修改状态

// 目标三：删除数据

// 目标四：添加数据

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

// 删除数据 根据 id
const hDel=(id)=>{
  list.value=list.value.filter(item=>item.id!==id)
}
// 添加数据
const hAdd=(taskName)=>{
  console.log('add');
  list.value.push({
    id:new Date(),
    name:taskName,
    done:false
  })
}
</script>

<template>
  <section class="todoapp">
    <TodoHeader @add="hAdd"></TodoHeader>
    <TodoMain :list="list" @changeDone="hChangeDone" @del="hDel"></TodoMain>
    <TodoFooter></TodoFooter>
  </section>
</template>

<style></style>
