<template>
  <div class="right-column flex-shrink-0 w-[300px] bg-white z-50"  v-show="curSelectId !== NULL_STATUS">
    <p class="text-center font-bold">组件配置</p>
    <div class="right-box box-border">
      <div class="option-item flex items-center" v-for="item in fillConfigInfo(comList[curSelectIndex])" :key="item.id">
          <span class="option-item__label">{{ item.label }}</span>
          <div class="option-item__config flex justify-end">
            <input v-if="item.type === 'input'" :type="item.inputType" v-model="comList[curSelectIndex].style[item.key]" :class="item.class"/>
            <colorPicker v-else-if=" item.component === 'colorPicker'" v-model="item.value" :class="item.class" @change="configChange($event, item)"></colorPicker>
            <editor v-else-if="item.component === 'editor'" :propValue="item.value" @change="editorChange"></editor>
            <component v-else :is="item.component" :propValue="item.value" :class="item.class" @change="configChange($event, item)"/>
          </div>
      </div>
    </div>
    <div class="close cursor-pointer flex justify-center items-center bg-white box-border" @click="setNULLSelectInfo">
      <i class="iconfont icon-close"></i>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { NULL_STATUS } from '@/dict/common'
import useComFunc from '@/hooks/common/useComFunc'
import useConfigFunc from '@/hooks/common/useConfigFunc'
import useSelectFunc from '@/hooks/common/useSelectFunc'
import Editor from '@/components/editor/editor.vue'

const { comList, setComPropValue } = useComFunc()
const { fillConfigInfo, configChange } = useConfigFunc()
const { curSelectId, curSelectIndex, setNULLSelectInfo } = useSelectFunc()

const editorChange = (editor) => {
  setComPropValue(curSelectIndex.value as number, editor)
}


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
    .option-item {
      margin-top: 20px;
      padding: 0 5px;
      &__config {
        flex: 1;
      }
      &.flex-column {
        flex-direction: column;
      }
      .option-config-item {
        margin-right: 10px;
      }
      input[type='number'] {
        width: 50px;
        background: #E5E6EB;
        padding: 0 5px;
      }
    }
  }
  .close {
    position: absolute;
    top: -15px;
    right: -15px;
    width: 30px;
    height: 30px;
    border: 1px solid #e5e6eb;
    border-radius: 50%;
    &:hover {
      .icon-close {
        color: #409eff;
      }
    }
    .icon-close {
      font-size: 12px;
    }
  }
}

</style>