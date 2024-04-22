<template>
  <div class="image-src-box">
    <span class="cursor-pointer" @click="chooseImage">选择</span>
    <input v-show="false" ref="imgRef" type="file" accept="image/*" @change="handleFileChange"/>
  </div>
</template>

<script lang='ts' setup>
import { computed, ref } from "vue"

const props = defineProps({
  propValue: {
    type: String,
    default: ''
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

const imgRef = ref('')

const chooseImage = () => {
  imgRef.value?.click()
}

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (!file) {
    return;
  }
 
  const reader = new FileReader()
  reader.onload = (e) => {
    emit('change', e.target.result)
  }
  reader.readAsDataURL(file)
}

</script>

<style scoped lang='scss'>
  .image-src-box {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    color: $primary-color;
  }
</style>