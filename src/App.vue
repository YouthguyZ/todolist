<script setup>
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'
import { ref,watch } from 'vue';
// 目标一：APP.vue 渲染(父向子传值：自定义属性)

// 目标二：修改状态

// 目标三：删除数据

// 目标四：添加数据
// 目标五：计算属性
// 目标六：全选反选
// 目标七：watch 状态存储本地

// 定义数据
// const list = ref([
//   {
//     id: 1,
//     name: '吃饭',
//     done: true,
//   },
//   {
//     id: 2,
//     name: '睡觉',
//     done: false,
//   },
//   {
//     id: 3,
//     name: '打豆豆',
//     done: false,
//   },
// ])
const list=ref(JSON.parse(localStorage.getItem('todolist')||'[]'))

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
    id:Date.now(),// 当前毫秒值
    name:taskName,
    done:false
  })
}
const hChangeAll=(val)=>{
  list.value.forEach(item=>item.done=val)
}
// 参数1: 要监视的数据
// 参数2: 回调函数
// 参数3: 配置对象
// 不加 value 可以监视到数据的数量变化, 但无法侦听到内部属性的变化
// 总结: 如果是引用数据类型的侦听, 不需要写 value, 但需要写 deep
// 原理: 其实就是监视的 ref 得到的响应式对象, 加 deep 可以侦听到 .value 属性的变化, 而 .value 就是我们的数组
watch(list, (newVal, oldVal) => {
  // console.log('我监视到了:', newVal)
  // console.log(list)
  localStorage.setItem('todolist', JSON.stringify(list.value))
}, {
  // 它决定了 list 对象内的数据变化是否被监视到
  deep: true // 深度监听
})
</script>

<template>
  <section class="todoapp">
    <TodoHeader @add="hAdd"></TodoHeader>
    <TodoMain @changeAll="hChangeAll" :list="list" @changeDone="hChangeDone" @del="hDel"></TodoMain>
    <TodoFooter :list="list"></TodoFooter>
  </section>
</template>

<style></style>
