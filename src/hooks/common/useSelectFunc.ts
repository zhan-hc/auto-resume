/**
 * 处理当前选中的组件数据
 */
import { storeToRefs } from 'pinia'
import { useComStore } from '@/stores/com'
import { NULL_STATUS } from '@/dict/common'
export default function () {

  const comStore = useComStore()
  const { curSelectId, curSelectIndex } = storeToRefs(comStore)
  
  const updateCurSelectInfo = (item, i) => {
    comStore.updateCurSelectId(item.id)
    comStore.updateCurSelectIndex(i)
  }

  const updateCurSelectId = (id) => {
    comStore.updateCurSelectId(id)
  }

  const setNULLSelectInfo = () => {
    comStore.updateCurSelectId(NULL_STATUS)
    comStore.updateCurSelectIndex(NULL_STATUS)
  }

  return {
    curSelectId,
    curSelectIndex,
    updateCurSelectId,
    setNULLSelectInfo,
    updateCurSelectInfo
  }
}