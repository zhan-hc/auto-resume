<template>
  <div id="paper" class="flex flex-1 flex-grow-1 ml-[340px] pb-[40px]"  @dragover="handleDragover" @drop="handleDrop" @click="setNULLSelectInfo">
    <div id="resume" class="relative w-[895px] h-[1272px] mt-[90px] bg-white">
      <shape 
        v-for="(com, i) in comList"
        :key="com.id"
        :com-opt="com"
        :active="com.id === curSelectId"
        :style="{...getShapeStyle(com.style), 'z-index': i + 1}"
        @click.stop="updateCurSelectInfo(com, i)">
        <component :is="comMap[com.key]" :style="getComStyle(com.style)" :propValue="com.propValue"/>
      </shape>
      <mark-line></mark-line>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { comMap } from '@/dict/com'
import { getComStyle, getShapeStyle } from '@/utils/style'
import useComFunc from '@/hooks/common/useComFunc'
import useDragFunc from '@/hooks/com/useDragFunc'
import useSelectFunc from '@/hooks/common/useSelectFunc'
import shape from '@/components/draw/shape.vue'
import MarkLine from '@/components/draw/mark-line.vue'

const { comList } = useComFunc()
const { handleDragover, handleDrop } = useDragFunc()
const { curSelectId, updateCurSelectInfo, setNULLSelectInfo } = useSelectFunc()

</script>

<style scoped lang='scss'>
</style>