<template>
  <div class="shape relative">
    <div class="shape__point" v-for="(item, i) in pointList" :key="i" :style="getPointStyle(item)"></div>
    <slot></slot>
  </div>
</template>

<script lang='ts' setup>
import usePointFunc from '@/hooks/shape/usePointFunc'

const props = defineProps({
  comOpt: {
    type: Object,
    default: () => ({})
  }
})

const { pointList, getPointStyle } = usePointFunc(props.comOpt)
</script>

<style scoped lang='scss'>
.shape {
  display: inline-block;
  border: 1px solid #b0e0e6;
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