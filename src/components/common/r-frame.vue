
<template>
  <div class="frame"></div>
  
</template>

<script lang='ts' setup>
/**框组件 */
const props = defineProps({
  comOpt: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style scoped lang='scss'>
  .frame {
    display: inline-block;
  }
</style>