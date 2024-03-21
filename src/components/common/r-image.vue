
<template>
  <img class="image" :src="propValue" alt=""/>
</template>

<script lang='ts' setup>
/**图片组件 */
const props = defineProps({
  propValue: {
    type: String,
    default: '',
    require: true
  }
})
</script>

<style scoped lang='scss'>
  
</style>