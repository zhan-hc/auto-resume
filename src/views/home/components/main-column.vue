<template>
  <div id="paper" class="flex flex-1 flex-grow-1 ml-40" @dragover="handleDragover" @click="paperClick">
    <div class="relative w-[794px] h-[1124px] mt-10 bg-white">
      <shape 
        ref="shapeRef"
        v-for="(com, i) in comList"
        :key="com.id"
        :com-opt="com"
        :active="com.id === curSelectId"
        :style="{...getShapeStyle(com.style), 'z-index': i + 1}"
        @click.stop="shapeClick(com)">
        <component :is="com.component" :style="getComStyle(com.style)" :propValue="com.propValue"/>
      </shape>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { storeToRefs } from 'pinia'
import { onClickOutside } from '@vueuse/core'
import { onMounted, reactive, ref, markRaw } from 'vue'
import { useDrawStore } from '@/stores/draw'
import { canvasStartLeft, canvasStartTop } from '@/constant/canvas'
import { getComStyle, getShapeStyle } from '@/utils/common'
import shape from '@/components/draw/shape.vue'
import RText from '@/components/common/r-text.vue'

const active = ref(false)
const shapeRef = ref(null)
const drawStore = useDrawStore()
const { curDragCom, comList, curSelectId } = storeToRefs(drawStore)
const paperClick = () => {
  drawStore.updateCurSelectId('')
}
const shapeClick = ({ id = '' }) => {
  drawStore.updateCurSelectId(id)
}

const handleDragover = (e) => {
  e.preventDefault();
  const moveX = e.clientX - canvasStartLeft
  const moveY = e.clientY - canvasStartTop
  drawStore.updateCurDragCom({
    id: +new Date(),
    ...curDragCom.value,
    style: {
      ...curDragCom.value.style,
      left: moveX,
      top: moveY
    }
  })
}
</script>

<style scoped lang='scss'>
</style>