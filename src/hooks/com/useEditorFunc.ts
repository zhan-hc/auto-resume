import { ref, shallowRef } from 'vue'
import { IDomEditor } from '@wangeditor/editor'
import { editorExcludeKeys, editorInsertKeys } from '@/dict/editor'
export default function () {
  const editorRef = shallowRef()
  const editorVal = ref('')
  const toolbarConfig = {
    // 不展示的菜单项
    excludeKeys: editorExcludeKeys,
    insertKeys: editorInsertKeys 
  }


  const editorConfig = { placeholder: '请输入内容...' }

  const handleCreated = (editor: IDomEditor) => {
    editorRef.value = editor // 记录 editor 实例
  }

  const editorChange = (editor: IDomEditor) => {
    console.log(editor.children, 'editorChange')
  }


  return {
    editorRef,
    editorVal,
    toolbarConfig,
    editorConfig,
    handleCreated,
    editorChange
  }
}