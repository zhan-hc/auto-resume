/**
 * 组件属性配置相关hook
 */
import _ from 'lodash'
import { COM_TYPE, comOptions } from "@/dict/com"
import useComFunc from '@/hooks/common/useComFunc'
import useSelectFunc from '@/hooks/common/useSelectFunc'

export default function () {
  const { setComStyle, setComPropValue } = useComFunc()
  const { curSelectIndex } = useSelectFunc()

  // 遍历配置组件的属性并填充属性值
  const fillConfigInfo = (comInfo) => {
    if (!comInfo) return
    const configList = _.cloneDeep(comOptions[comInfo.key])
    for (let i = 0; i < configList.length; i++) {
      const option = configList[i]
      if (comInfo.key === COM_TYPE.TEXT && option.key === 'editor') {
        option.value = comInfo.propValue
      } else if (option.key === 'border-direction') {
        const borderDirection = [];
        ['top', 'left', 'bottom', 'right'].forEach(item => {
          if (comInfo.style[`border-${item}-style`] === 'solid') {
            borderDirection.push(item)
          }
        })
        option.value = borderDirection
      } else if (option.key === 'border-radius' && comInfo.style[option.key]) {
        const styleRadius = comInfo.style[option.key]
        option.value = styleRadius.split(' ').map(item => Number(item.replace('px', '')))
      } else if (comInfo.style[option.key]) {
        option.value = comInfo.style[option.key]
      }
    }
    return configList
  }

  // 组件属性配置change事件
  const configChange = (val, { key, value }) => {
    if (['border-color', 'background', 'object-fit', 'background-color'].includes(key)) {
      setComStyle(curSelectIndex.value as number, key, val)
    } else if (key === 'border-direction') {
      ['top', 'left', 'bottom', 'right'].forEach(attr => {
        setComStyle(curSelectIndex.value as number, `border-${attr}-style`, val.includes(attr) ? 'solid' : 'none')
      })
    } else if (key === 'border-radius') {
      setComStyle(curSelectIndex.value as number, key, `${val.join('px ')}px`)
    }  else {
      setComPropValue(curSelectIndex.value as number, val)
    }
  }
  return {
    fillConfigInfo,
    configChange
  }
}