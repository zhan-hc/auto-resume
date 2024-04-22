<template>
  <div class="left-column flex-shrink-0 w-[260px] bg-white box-border">
    <tab :list="leftTabs" @tabChange="tabChange"></tab>
    <!-- 组件 -->
    <div v-if="activeTab.key === 'com'" class="com-box flex flex-wrap mt-5 box-border">
      <div class="com-item flex items-center cursor-pointer"
        v-for="(item, i) in COMOptionList"
        :key="item.id"
        draggable="true"
        @dragstart="handleDragStart($event, i)"
        @dragend="handleDragend"
        @click="pushCom(item, true)"
      >
        <i class="iconfont" :class="item.icon"></i>
        <span class="ml-2">{{ item.label }}</span>
      </div>
    </div>
    <!-- 模板 -->
    <div v-else-if="activeTab.key === 'temp'" class="temp-box flex flex-wrap">
      <div 
        class="temp-item flex flex-col justify-between items-center box-border hover:cursor-pointer"
        v-for="(temp, key) in tempMap"
        :key="key"
        @click="changeTemp(key)"
        >
        <img class="temp-img" :src="getImageUrl(temp.imgUrl)" alt="">
        <span class="temp-text">{{ temp.label }}</span>
      </div>
    </div>
    <!-- 结构 -->
    <div v-else-if="activeTab.key === 'const'" class="const-box flex flex-col">
      <div
        :key="item.id"
        v-for="(item, i) in comList"
        class="const-item flex items-center cursor-pointer"
        :class="{'const-item--active' : curSelectId === item.id}"
        @click="updateCurSelectInfo(item, i)"
      >
        <i class="const-icon iconfont" :class="item.icon"></i>
        <span class="const-text">{{ item.id }}</span>
        <i class="iconfont icon-close cursor-pointer" @click="deleteConst(item.id)"></i>
      </div>
      <div v-if="!comList.length" class="null">暂无结构数据</div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { COMOptionList } from '@/dict/com'
import { leftTabs } from '@/dict/config'
import { NULL_STATUS } from '@/dict/common'
import { getImageUrl } from '@/utils/common'
import useDragFunc from '@/hooks/com/useDragFunc'
import useTabsFunc from '@/hooks/com/useTabsFunc'
import useComFunc from '@/hooks/common/useComFunc'
import useTempFunc from '@/hooks/common/useTempFunc'
import useSelectFunc from '@/hooks/common/useSelectFunc'
import Tab from '@/components/tab/tab.vue'

const { activeTab, tabChange } = useTabsFunc()
const { comList, pushCom, removeCom } = useComFunc()
const { handleDragStart } = useDragFunc()
const { tempMap, changeTemp } = useTempFunc()
const { curSelectId, updateCurSelectInfo, setNULLSelectInfo } = useSelectFunc()


const deleteConst = (id) => {
  removeCom(id)
  setNULLSelectInfo()
}


</script>

<style scoped lang='scss'>
.left-column  {
  z-index: 99;
  position: fixed;
  top: 50px;
  left: 0;
  height: calc(100vh - 50px);
  border-right: 1px solid #E5E6EB;
  overflow: scroll;
  .com-box {
    padding: 0 5px;
    .com-item {
      width: 45%;
      margin-bottom: 10px;
      padding: 0 5px;
      border: 1px solid #ccc;
      border-radius: 2px;
      font-size: 14px;
      &:nth-child(odd) {
        margin-right: 10px;
      }
    }
  }
  .temp-box {
    margin-top: 20px;
    padding: 0 10px;
    .temp-item {
      width: 45%;
      font-size: 14px;
      margin-bottom: 20px;
      &:nth-child(2n) {
        margin-left: 10px;
      }
      &:hover {
        .temp-img {
          border: 1px solid #409eff;
          border-radius: 4px;
        }
      }
      .temp-img {
        border: 1px solid #ccc;
        border-radius: 4px;
      }
      .temp-text {
        margin-top: 10px;
      }
    }
  }
  .const-box {
    margin-top: 10px;
    padding: 0 5px;
    font-size: 14px;
    .const-icon {
      margin-right: 10px;
    }
    .const-text {
      flex: 1;
      color: #1D2129;
    }
    .const-item {
      padding: 5px;
      &--active {
        background: #EBEBEB;
        .const-text,
        .const-icon {
          color: #409eff;
        }
      }
      &:hover {
        background: #F5F5F5;
      }
    }
    .icon-close {
      font-size: 12px;
      color: #1D2129;
      &:hover {
        color: #409eff;
      }
    }
  }
}
  
</style>