<template>
  <div class="image-fit-box">
    <div class="fit-item flex">
      <input v-model="modelValue" type="radio" value="fill"/>
      <span class="fit-label">FILL</span>
    </div>
    <div class="fit-item flex">
      <input v-model="modelValue" type="radio" value="contain"/>
      <span class="fit-label">CONTAIN</span>
    </div>
    <div class="fit-item flex">
      <input v-model="modelValue" type="radio" value="cover"/>
      <span class="fit-label">COVER</span>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { computed } from "vue"

const props = defineProps({
  propsValue: {
    type: String,
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
  .image-fit-box {
    display: flex;
    flex-direction: column;
    font-size: 14px;
  }
  .fit-item {
    margin-bottom: 5px;
  }
  .fit-label {
    margin-left: 5px;
  }
</style>