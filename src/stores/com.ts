import { reactive, toRefs } from 'vue'
import { defineStore } from 'pinia'
import { NULL_STATUS } from '@/dict/common'
import { ComOption } from '@/common/types/com'
export const useComStore = defineStore('com', () => {

  const state: {
    comList: ComOption[];
    curSelectId: String;
    curSelectIndex: String | Number;
  } = reactive({
    comList: [], // 画布中的所有组件
    curSelectId: NULL_STATUS, // 当前组件的id
    curSelectIndex: NULL_STATUS

  })

  function updateComlist (comList) {
    state.comList = comList
  }
  function pushComlist (com) {
    state.comList.push(com)
  }
  function spliceComlist (com, index) {
    state.comList.splice(index, 1, com)
  }
  function updateCurSelectId (id) {
    state.curSelectId = id
  }
  function updateCurSelectIndex (id) {
    state.curSelectIndex = id
  }

  return {
    ...toRefs(state),
    updateComlist, pushComlist, spliceComlist, updateCurSelectId, updateCurSelectIndex
  }
})
