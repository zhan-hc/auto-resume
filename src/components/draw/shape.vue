<template>
  <div class="shape absolute" :class="{ active: active }" @mousedown="handleMouseDown">
    <div class="shape__point"
      v-for="(item, i) in (active? pointList : [])"
      :key="i"
      :style="getPointStyle(item)"
      @mousedown="handleMouseDownOnPoint(item)"
    ></div>
    <slot></slot>
  </div>
</template>

<script lang='ts' setup>
import useShapePoint from '@/hooks/shape/useShapePoint'
import useShapeDrag from '@/hooks/shape/useShapeDrag'

const props = defineProps({
  comOpt: {
    type: Object,
    default: () => ({})
  },
  active: {
    type: Boolean,
    default: false
  }
})

const { pointList, getPointStyle } = useShapePoint(props.comOpt)
const { handleMouseDownOnPoint, handleMouseDown } = useShapeDrag(props.comOpt.id)
</script>

<style scoped lang='scss'>
.shape {
  display: inline-block;
  border: 1px solid transparent;
  &.active {
    border: 1px solid #b0e0e6;
    &:hover {
      cursor: move;
    }
  }
  &:hover {
    border: 1px solid #b0e0e6;
  }
  &__point {
    position: absolute;
    width: 6px;
    height: 6px;
    background: #fff;
    border-radius: 50%;
    border: 1px solid #b0e0e6;
  }
}
</style>