<template>
  <div class="cb-item flex">
    <input v-model="modelValue" type="checkbox" value="top" @change="checkboxChange"/>
    <span class="cb-label">T</span>
  </div>
  <div class="cb-item flex">
    <input v-model="modelValue" type="checkbox" value="right" @change="checkboxChange"/>
    <span class="cb-label">R</span>
  </div>
  <div class="cb-item flex">
    <input v-model="modelValue" type="checkbox" value="bottom" @change="checkboxChange"/>
    <span class="cb-label">B</span>
  </div>
  <div class="cb-item flex">
    <input v-model="modelValue" type="checkbox" value="left" @change="checkboxChange"/>
    <span class="cb-label">L</span>
  </div>
</template>

<script lang='ts' setup>
import { computed } from "vue"

const props = defineProps({
  propsValue: {
    type: Array,
    default: ''
  }
})

const emit = defineEmits(['update:propsValue','change'])
const modelValue = computed({
  get () {
    return props.propsValue
  },
  set (value) {
    emit('update:propsValue', value)
  }
})

const checkboxChange = (val) => {
  emit('change', props.propsValue)
}
</script>

<style scoped lang='scss'>
  .cb-item {
    margin-right: 10px;
  }
  .cb-label {
    margin-left: 5px;
  }
</style>