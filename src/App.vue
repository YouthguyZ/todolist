<template>
  <div>
  <h1> 学习 pinia </h1>
  <h2>money:{{counter.num}}</h2>
  <button @click="hAdd">点击我加钱</button>
  
  </div>
</template>

<script setup>
// 导入store
import useCounterStore from './store/counter'

// 使用
const counter=useCounterStore()
const hAdd=()=>{
  counter.add()
}
</script>

<style lang="scss" scoped>

</style>