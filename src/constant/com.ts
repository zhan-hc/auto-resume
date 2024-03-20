import { markRaw } from 'vue'
import RText from '@/components/common/r-text.vue'
import RFrame from '@/components/common/r-frame.vue'
import RImage from '@/components/common/r-image.vue'

// 组件信息
export const comMap = {
  frame: {
    key: 'frame',
    label: '边框',
    component: RFrame
  },
  text: {
    key: 'text',
    label: '文本',
    component: RText
  },
  image: {
    key: 'image',
    label: '图片',
    component: RImage
  }
}

// 组件demo列表
export const COMOptionList = [
  {
    component: markRaw(comMap.frame.component),
    label: '边框',
    propValue: '',
    icon: 'icon-frame',
    animations: '', // 动画列表
    events: {}, // 事件列表
    style: {
      top: 20,
      left: 20,
      width: 100,
      height: 20,
      'border-bottom': '1px solid #000'
    }
  },
  {
    component: markRaw(comMap.text.component),
    label: '文本',
    propValue: '这是文本组件',
    icon: 'icon-text',
    animations: '', // 动画列表
    events: {}, // 事件列表
    style: {
      top: 20,
      left: 20,
      width: 100,
      height: 100,
      padding: 10,
      'font-size': 14
    }
  },
  {
    component: markRaw(comMap.image.component),
    label: '图片',
    propValue: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/icon.png?v=1556263038788',
    icon: 'icon-img',
    animations: '', // 动画列表
    events: {}, // 事件列表
    style: {
      top: 20,
      left: 20,
      width: 100,
      height: 100,
      padding: 10,
      'font-size': 14
    }
  }
]

// 配置属性
export const optionAttr = {
  [comMap.frame.key]: ['border', 'borderColor'],
  [comMap.text.key]: ['color', 'fontWeight', 'fontSize'],
  [comMap.image.key]: ['object-fit']
}
  