<template>
  <header-column></header-column>
  <div class="con-box flex bg-slate-200">
    <left-column></left-column>
    <main-column></main-column>
    <right-column></right-column>
  </div>
  
</template>

<script lang='ts' setup>
import LeftColumn from './components/left-column.vue'
import MainColumn from './components/main-column.vue'
import RightColumn from './components/right-column.vue'
import HeaderColumn from './components/header-column.vue'
</script>

<style scoped lang='scss'>
.con-box {
  min-height: calc(100vh - 50px);
}
</style>