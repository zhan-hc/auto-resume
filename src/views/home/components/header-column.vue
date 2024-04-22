<template>
  <div class="header-column flex items-center h-[50px] bg-white box-border">
    <div class="flex-shrink-0"></div>
    <div class="flex-1"></div>
    <div class="option-item flex-shrink-0 mr-5 cursor-pointer" @click="clear">
      清空
    </div>
    <div class="option-item flex-shrink-0 mr-5 cursor-pointer" @click="exportPdf">
      导出
    </div>
    <a class="flex-shrink-0 mr-5" :href="userInfo.github_project_url"  target="_blank">
      <i class="iconfont icon-github cursor-pointer"></i>
    </a>
  </div>
</template>

<script lang='ts' setup>
import { inject, nextTick } from 'vue'
import { htmlToPDF } from '@/utils/html2pdf'
import { userInfo } from '@/dict/config'
import { CACHE_KEY } from '@/dict/common'
import { Local } from '@/utils/cache'
import useComFunc from '@/hooks/common/useComFunc'
import useLoadingFunc from '@/hooks/com/useLoadingFunc'
import useSelectFunc from '@/hooks/common/useSelectFunc'

const { comList, initComList } = useComFunc()
const { showLoading, hideLoading } = useLoadingFunc()
const { setNULLSelectInfo } = useSelectFunc()

const exportPdf = () => {
  if (!comList.value.length) {
    alert('暂无内容可导出！')
    return
  }
  setNULLSelectInfo()
  showLoading()
  nextTick(async () => {
    await htmlToPDF('resume', '简历')
    hideLoading()
  })
  
}
const clear = () => {
  initComList()
  Local.remove(CACHE_KEY)
  setNULLSelectInfo()
}
</script>

<style scoped lang='scss'>
.header-column {
  z-index: 998;
  position: fixed;
  top: 0;
  height: 50px;
  width: 100vw;
  border-bottom: 1px solid #E5E6EB;
  .option-item {
    font-size: 14px;
  }
}
  .iconfont {
    color: #222226;
    font-size: 24px;
  }
</style>