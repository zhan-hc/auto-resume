<template>
  <div class="radius-box">
    <div class="view relative">
      <input class="input-left-top absolute" v-model="modelValue[0]" type="number" style="width: 40px" @change="handleChange"/>
      <input class="input-right-top absolute" v-model="modelValue[1]" type="number" style="width: 40px" @change="handleChange"/>
      <input class="input-right-bot absolute" v-model="modelValue[2]" type="number" style="width: 40px" @change="handleChange"/>
      <input class="input-left-bot absolute" v-model="modelValue[3]" type="number" style="width: 40px" @change="handleChange"/>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { computed } from "vue"

const props = defineProps({
  propValue: {
    type: Array,
    default: [0,0,0,0]
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

const handleChange = (e) => {
  emit('change', modelValue.value)
}

</script>

<style scoped lang='scss'>
.radius-box {
  padding: 40px;
}
  .view {
    width: 80px;
    height: 40px;
    border: 2px solid #000;
    box-sizing: border-box;
  }
  .input-left-top {
    left: -40px;
    top: -26px;
  }
  .input-right-top {
    right: -40px;
    top: -26px;
  }
  .input-left-bot {
    left: -40px;
    bottom: -26px;
  }
  .input-right-bot {
    right: -40px;
    bottom: -26px;
  }
  input {
    border: 1px solid #A9A9A9;
    border-radius: 4px;
    text-align: center;
  }
  // input[type=number]::-webkit-outer-spin-button,
  // input[type=number]::-webkit-inner-spin-button {
  //   -webkit-appearance: none;
  //   margin: 0;
  // }
  // input[type=number] {
  //   -moz-appearance: textfield; /* Firefox */
  // }


</style>