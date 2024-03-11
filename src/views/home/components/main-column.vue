<template>
  <div id="paper" class="flex flex-1 flex-grow-1 justify-center">
    <div class="w-[794px] h-[1124px] mt-10 bg-white">
      <shape :com-opt="comOpt">
        <div class="com"></div>
      </shape>
    </div>
  </div>
</template>

<script lang='ts' setup>
import shape from '@/components/draw/shape.vue'

const comOpt = {
  component: 'test',
  label: '组件名称',
  propValue: '文字',
  icon: 'icon',
  animations: '', // 动画列表
  events: {}, // 事件列表
  style: {
    width: 100,
    height: 100
  }
}
</script>

<style scoped lang='scss'>
.com {
  width: 100px;
  height: 100px;
  background: bisque;
}
</style>