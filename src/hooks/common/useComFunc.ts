/**
 * 处理画布中展示的组件数据
 */
import _ from 'lodash'
import { Ref, inject } from 'vue'
import { ComOption } from '@/common/types'
import { randomStr } from '@/utils/common'

export default function () {

  const comList: Ref<ComOption[]> = inject('comList')

  const initComList = () => {
    comList.value = []
  }

  const setComlist = (val:Array<ComOption> = []) => {
    comList.value = val
  }

  // 根据索引获取对应的组件的键值
  const getComIndexKeyToVal = (index: number, key: string) => {
    if (index >= comList.value.length) {
      throw new Error('组件列表中没有该索引数据');
    }
    return comList.value[index][key]
  }

  const pushCom = (com: ComOption, randomId: boolean = false) => {
    const curCom = _.cloneDeep(com)
    randomId && (curCom.id = randomStr())
    comList.value.push(curCom)
  }

  const removeCom = (id: String) => {
    const list = comList.value.filter(item => item.id !== id)
    setComlist(list)
  }

  const setComPropValue = (index: number, val: any) => {
    if (index >= comList.value.length) {
      throw new Error('组件列表中没有该索引数据');
    }
    comList.value[index].propValue = val
  }
  const setComStyle = (index: number, key: String, val: any) => {
    if (index >= comList.value.length) {
      throw new Error('组件列表中没有该索引数据');
    }
    comList.value[index].style[key] = val
  }
  

  return {
    comList,
    pushCom,
    removeCom,
    setComlist,
    setComStyle,
    initComList,
    setComPropValue,
    getComIndexKeyToVal
  }
}