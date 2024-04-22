import { ref } from 'vue'
import { leftTabs } from '@/dict/config'

export default function () {
  const activeTab = ref(leftTabs[0])
  const tabChange = (tab) => {
    activeTab.value = tab
  }
  return {
    activeTab,
    tabChange
  }
}