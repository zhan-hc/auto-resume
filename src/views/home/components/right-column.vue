<template>
  <div class="right-column flex-shrink-0 w-[300px] bg-white z-50"  v-show="curSelectId">
    <p class="text-center font-bold">组件配置</p>
    <div class="right-box">
      <div class="group-item" v-for="(group, i) in comOption[curCom.key]" :key="i">
        <div class="group-label">{{ group.groupLabel }}</div>
        <div class="option-item" v-for="(item, j) in group.groupOptions" :key="`${i}_${j}`" :class="item.optionClass">
          <span class="option-item__label">{{ item.label }}</span>
          <div class="option-item__config">
            <input v-if="item.type === 'input'" :type="item.inputType" v-model="item.value" :class="item.class"/>
            <component v-else :is="item.component" :propsValue="item.value" :class="item.class"/>
          </div>
        </div>
      </div>
    </div>
    <div class="close"></div>
  </div>
</template>

<script lang='ts' setup>
import { onMounted, ref, shallowRef, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useDrawStore } from '@/stores/draw'
import { comOption } from '@/constant/com'
import useEditorFunc from '@/hooks/com/useEditorFunc'

// import { Editor, Toolbar } from '@wangeditor/editor-for-vue'


const color = ref('#000000')
const bgColor = ref ('transparent')
const checkbox = ref(['bottom'])
const radio = ref('')
const borderWidth = ref('1')
const drawStore = useDrawStore()
// const { editorRef, valueHtml, toolbarConfig, editorConfig, handleCreated, handleChange } = useEditorFunc()
const { curSelectId, curCom } = storeToRefs(drawStore)

const checkboxChange = (val) => {
  console.log(checkbox.value, 'vcl')
}
// watch(curSelectId, () => {
//   console.log('组件被选中')
//   valueHtml.value = curDragCom.value.propValue
// })
</script>

<style scoped lang='scss'>
.right-column {
  position: absolute;
  top: 80px;
  right: 20px;
  height: calc(100vh - 100px);
  padding: 20px;
  border: 1px solid #E5E6EB;
  .right-box {
    margin-top: 20px;
    padding: 0 5px;
    box-sizing: border-box;
    .group-item {
      margin-bottom: 20px;
      .group-label {
        padding-bottom: 5px;
        border-bottom: 1px solid #ccc;
      }
    }
    .option-item {
      display: flex;
      align-items: center;
      margin-top: 20px;
      padding: 0 5px;
      &__config {
        display: flex;
        justify-content: flex-end;
        flex: 1;
      }
      &.flex-column {
        flex-direction: column;
      }
      .option-config-item {
        margin-right: 10px;
      }
      .option-border-width {
        width: 50px;
        background: #E5E6EB;
        padding: 0 5px;
      }
      .option-color-picker {
        border: 1px solid #000;
        border-radius: 2px;
      }
      .option-cb-label {
        margin-left: 5px;
      }
    }
  }
}

</style>