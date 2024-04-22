
<template>
  <div class="text">
    <div v-html="propValue"></div>
  </div>
</template>

<script lang='ts' setup>
/**文本组件 */
const props = defineProps({
  propValue: {
    type: String,
  }
})

const editMode = false
</script>

<style scoped lang='scss'>
.text {
  overflow: hidden;
  box-sizing: border-box;
}
</style>