import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useDrawStore = defineStore('draw', () => {

  const comList = ref([])
  const curDragCom = ref({})
  const curSelectId = ref('')

  const curCom = computed(() => curDragCom.value)

  function updateComlist (comList) {
    comList.value = comList
  }
  function pushComlist (com) {
    comList.value.push(com)
  }
  function updateCurDragCom (com) {
    curDragCom.value = com
  }
  function updateCurSelectId (id) {
    curSelectId.value = id
  }

  return { comList, curCom, curDragCom, curSelectId, updateComlist, pushComlist, updateCurDragCom, updateCurSelectId }
})
