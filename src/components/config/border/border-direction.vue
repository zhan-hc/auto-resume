<template>
  <div class="cb-item flex">
    <input v-model="modelValue" type="checkbox" value="top"/>
    <span class="cb-label">T</span>
  </div>
  <div class="cb-item flex">
    <input v-model="modelValue" type="checkbox" value="right"/>
    <span class="cb-label">R</span>
  </div>
  <div class="cb-item flex">
    <input v-model="modelValue" type="checkbox" value="bottom"/>
    <span class="cb-label">B</span>
  </div>
  <div class="cb-item flex">
    <input v-model="modelValue" type="checkbox" value="left"/>
    <span class="cb-label">L</span>
  </div>
</template>

<script lang='ts' setup>
import { computed } from "vue"

const props = defineProps({
  propValue: {
    type: Array,
    default: []
  }
})

const emit = defineEmits(['update:propValue', 'change'])
const modelValue = computed({
  get () {
    return props.propValue
  },
  set (value) {
    emit('update:propValue', value)
    emit('change', value)
  }
})
</script>

<style scoped lang='scss'>
  .cb-item {
    margin-right: 10px;
  }
  .cb-label {
    margin-left: 5px;
  }
</style>