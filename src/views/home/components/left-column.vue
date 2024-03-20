<template>
  <div class="flex-shrink-0 w-[200px] bg-white z-50">
    <p class="text-center font-bold">组件列表</p>
    <div class="com-box">
      <div class="com-item" v-for="(item, i) in COMOptionList" :key="i" draggable="true" @dragstart="handleDragStart($event, item)" @dragend="handleDragend">
        <i class="iconfont" :class="item.icon"></i>
        <span class="ml-2">{{ item.label }}</span>
      </div>
    </div>
    
  </div>
</template>

<script lang='ts' setup>
import { storeToRefs } from 'pinia'
import { COMOptionList } from '@/constant/com'
import { useDrawStore } from '@/stores/draw'

const drawStore = useDrawStore()
const { comList, curDragCom } = storeToRefs(drawStore)

const handleDragStart = (event, item) => {
  drawStore.updateCurDragCom(item)
}

const handleDragend = () => {
  drawStore.pushComlist(curDragCom.value)
}

</script>

<style scoped lang='scss'>
  .com-box {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    padding: 0 5px;
    border-right: 1px solid #E5E6EB;
    box-sizing: border-box;
    .com-item {
      display: flex;
      align-items: center;
      width: 45%;
      margin-bottom: 10px;
      padding: 0 5px;
      border: 1px solid #ccc;
      border-radius: 2px;
      font-size: 14px;
      &:nth-child(odd) {
        margin-right: 10px;
      }
    }
  }
</style>