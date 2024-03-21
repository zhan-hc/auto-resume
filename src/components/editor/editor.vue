<template>
  <div class="editor-box">
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
import { computed } from 'vue'

const props = defineProps({
  propsValue: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:propsValue'])

const modelValue = computed({
  get () {
    return props.propsValue
  },
  set (value) {
    emit('update:propsValue', value)
  }
})

const { editorRef, valueHtml, toolbarConfig, editorConfig, handleCreated, handleChange } = useEditorFunc()
</script>

<style scoped lang='scss'>
  .editor-box {
    display: flex;
    flex-direction: column;
  }
  .editor-content {
    margin-top: 10px;
    width: 100%;
    overflow: auto;
  }
</style>