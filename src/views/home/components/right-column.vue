<template>
  <div class="flex-shrink-0 w-[200px] bg-white z-50">
    <p class="text-center font-bold">组件配置</p>
    <div class="right-box" v-if="curSelectId">
      <div class="option-item">
        <span class="option-item__label">颜色：</span>
        <div class="option-item__config">
          <colorPicker v-model="color"></colorPicker>
        </div>
      </div>
      <div class="option-item">
        <span class="option-item__label">富文本：</span>
        <div class="option-item__config">
          <Toolbar
            :editor="editorRef"
            :defaultConfig="toolbarConfig"
            mode="simple"
          />
          <Editor
            class="option-item__editor"
            v-model="valueHtml"
            :defaultConfig="editorConfig"
            mode="simple"
            @onCreated="handleCreated"
            @onChange="handleChange"
          />
        </div> 
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { onMounted, ref, shallowRef, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useDrawStore } from '@/stores/draw'
import useEditorFunc from '@/hooks/com/useEditorFunc'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'


const color = ref('#000000')
const drawStore = useDrawStore()
const { editorRef, valueHtml, toolbarConfig, editorConfig, handleCreated, handleChange } = useEditorFunc()
const { curSelectId, curDragCom } = storeToRefs(drawStore)

watch(curSelectId, () => {
  console.log('组件被选中')
  valueHtml.value = curDragCom.value.propValue
})
</script>

<style scoped lang='scss'>
.right-box {
  margin-top: 20px;
  padding: 0 5px;
  border-left: 1px solid #E5E6EB;
  box-sizing: border-box;
  .option-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 20px;
    padding: 0 5px;
    &__label {
      width: 100%;
      padding-bottom: 10px;
      border-bottom: 1px solid #ccc;
    }
    &__config {
      margin-top: 5px;
    }
    &__editor{
      width: 100%;
    }
  }
}
</style>