<template>
  <div class="editor-box" v-if="initStatus">
      <Toolbar
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      mode="simple"
    />
    <Editor
      class="editor-content"
      v-model="modelValue"
      :defaultConfig="editorConfig"
      mode="simple"
      @onCreated="handleCreated"
      @onChange="handleChange"
    />
  </div>
  
</template>

<script lang='ts' setup>
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import useEditorFunc from '@/hooks/com/useEditorFunc'
import { computed, onMounted, ref, watch } from 'vue'

const props = defineProps({
  propValue: {
    type: String,
    default: ''
  }
})

watch(() => props.propValue, (val) => {
  if (val !==  modelValue.value) {
    modelValue.value = val
  }
})

const emit = defineEmits(['update:propValue', 'change'])
const lastVal = ref('')
const modelValue = ref('')
const initStatus = ref(false)

const { editorRef, toolbarConfig, editorConfig, handleCreated } = useEditorFunc()

const handleChange = (editor) => {
  if (lastVal.value !== modelValue.value) {
    emit('change', modelValue.value)
  }
  lastVal.value = modelValue.value
}
onMounted(() => {
  modelValue.value = props.propValue
  initStatus.value = true
})
</script>

<style scoped lang='scss'>
  .editor-box {
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: auto;
  }
  .editor-content {
    margin-top: 10px;
    width: 100%;
    overflow: auto;
  }
</style>