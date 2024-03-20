import { storeToRefs } from 'pinia'
import { ref, shallowRef } from 'vue'
import { IDomEditor } from '@wangeditor/editor'
import { editortExcludeKeys } from '@/dict/com'
import { useDrawStore } from '@/stores/draw'
export default function () {
  const editorRef = shallowRef()
  const valueHtml = ref('')
  const drawStore = useDrawStore()
  const { curSelectId, comList } = storeToRefs(drawStore)
  const curChangeHtml = ref('')
  const toolbarConfig = {
    // 不展示的菜单项
    excludeKeys: editortExcludeKeys
  }

  const editorConfig = { placeholder: '请输入内容...' }

  const handleCreated = (editor: IDomEditor) => {
    editorRef.value = editor // 记录 editor 实例
  }

  const handleChange = (editor: IDomEditor) => {
    const curCom = comList.value.find(item => item.id === curSelectId.value)
    if (curCom.propValue !== valueHtml.value) {
      curCom.propValue = valueHtml.value
      drawStore.updateComlist(curCom)
      
    }
  }

  return {
    editorRef,
    valueHtml,
    curChangeHtml,
    toolbarConfig,
    editorConfig,
    handleCreated,
    handleChange
  }
}