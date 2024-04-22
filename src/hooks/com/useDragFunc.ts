/**
 * 处理组件拖拽相关事件
 */
import _ from 'lodash'
import { randomStr } from '@/utils/common'
import { COMOptionList } from '@/dict/com'
import { canvasStartLeft, canvasStartTop } from '@/dict/common'
import useComFunc from '@/hooks/common/useComFunc'
export default function () {

  const { pushCom } = useComFunc()

  const handleDragover = (e) => {
    // dragover事件的默认行为是拒绝接受任何被拖放的元素。所以需要阻止浏览器默认行为
    e.preventDefault()
  }

  const handleDragStart = (e, i) => {
    // 设置拖拽时组件的index
    e.dataTransfer.setData('index', i)
  }

  const handleDrop = (e) => {
    const dragcomIndex = e.dataTransfer.getData('index')
    const dragCom = _.cloneDeep({ ...COMOptionList[dragcomIndex], id: randomStr() })
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    const scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft
    dragCom.style.left = e.x - canvasStartLeft + scrollLeft
    dragCom.style.top = e.y - canvasStartTop + scrollTop
    pushCom(dragCom)
  }
  

  return {
    handleDragover,
    handleDragStart,
    handleDrop
  }
}