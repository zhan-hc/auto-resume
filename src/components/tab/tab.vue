<template>
  <div class="tab-box" style="transform: translateX(0px);">
    <div class="tab-item"
      :class="{'tab--active': activeIndex === i }"
      v-for="(item, i) in list"
      :key="i"
      @click="tabClick(i)"
    >{{ item.label }}</div>
    <div class="tab-line" :style="{ left: `${transLeft}px`, width: `${lineWidth}px`  }"></div>
  </div>
</template>

<script lang='ts' setup>
import { ref } from "vue"

const props = defineProps({
  list: {
    type: Array,
    default: () => []
  }
})
const emit = defineEmits(['tabChange'])

const activeIndex = ref(0)
const transLeft = ref(10)
const lineWidth = ref(28)

const tabClick = (i) => {
  const tabsDom = document.querySelector('.tab-box')
  const tabDom = tabsDom.children[i]
  const { left, width } = tabDom.getBoundingClientRect()
  transLeft.value = left + (i === 0 ? 0 : 20)
  lineWidth.value = width - (i === 0 ? 20 : 40)
  activeIndex.value = i
  emit("tabChange", props.list[i])
}
</script>

<style scoped lang='scss'>
  .tab-box {
    position: relative;
    display: flex;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: #e4e7ed;
    }
    .tab-item {
      padding: 0 20px;
      font-size: 14px;
      cursor: pointer;
      &.tab--active {
        color: #409eff;
      }
      &:nth-child(1) {
        padding-left: 0;
      }
      &:hover {
        color: #409eff;
      }
    }
    .tab-line {
      position: absolute;
      bottom: 0;
      left: 10px;
      height: 2px;
      width: 30px;
      background: #409eff;
      z-index: 2;
      transition: left .2s cubic-bezier(.34,.69,.1,1), width .2s cubic-bezier(.34,.69,.1,1);
    }
  }
</style>