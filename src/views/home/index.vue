<template>
  <Loading v-show="isLoading"></Loading>
  <header-column></header-column>
  <div class="con-box flex bg-slate-200 box-border">
    <left-column></left-column>
    <main-column></main-column>
    <right-column></right-column>
  </div>
</template>

<script lang='ts' setup>
import { onMounted, provide, ref } from 'vue'
import { Local } from '@/utils/cache'
import { CACHE_KEY } from '@/dict/common'
import { ComOption } from '@/common/types/com'
import LeftColumn from './components/left-column.vue'
import MainColumn from './components/main-column.vue'
import RightColumn from './components/right-column.vue'
import HeaderColumn from './components/header-column.vue'
import Loading from '@/components/loading/loading.vue'

const comList = ref<ComOption[]>([])
const isLoading = ref<boolean>(false)

provide('comList', comList)
provide('isLoading', isLoading)


onMounted(() => {
  // 数据填充
  const data = Local.get(CACHE_KEY)
  if (data?.length) {
    comList.value = data
  }
  document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'hidden') { // 失去焦点
      comList.value.length && Local.set(CACHE_KEY, comList.value)
    } else if (document.visibilityState === 'visible') { // 获得焦点
    }
  })
})
</script>

<style scoped lang='scss'>
.con-box {
  min-height: calc(100vh - 50px);
}
</style>