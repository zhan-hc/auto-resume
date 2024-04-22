import { markRaw } from 'vue'
import RText from '@/components/common/r-text.vue'
import RFrame from '@/components/common/r-frame.vue'
import RImage from '@/components/common/r-image.vue'
import BorderRadius from '@/components/config/border/border-radius.vue'
import BorderDirection from '@/components/config/border/border-direction.vue'
import ObjFit from '@/components/config/image/object-fit.vue'
import ImagePicker from '@/components/config/image/image-picker.vue'


export const COM_TYPE = {
  FRAME: 'frame',
  TEXT: 'text',
  IMAGE: 'image'
}

// 组件基本信息
export const comBaseMap = {
  [COM_TYPE.FRAME]: {
    key: COM_TYPE.FRAME,
    label: '边框',
    icon: 'icon-frame'
  },
  [COM_TYPE.TEXT]: {
    key: COM_TYPE.TEXT,
    label: '文本',
    icon: 'icon-text'
  },
  [COM_TYPE.IMAGE]: {
    key: COM_TYPE.IMAGE,
    label: '图片',
    icon: 'icon-img'
  }
}

// 组件map
export const comMap = {
  [COM_TYPE.FRAME]: markRaw(RFrame),
  [COM_TYPE.TEXT]: markRaw(RText),
  [COM_TYPE.IMAGE]: markRaw(RImage)
}

// 组件demo列表
export const COMOptionList = [
  {
    ...comBaseMap[COM_TYPE.FRAME],
    propValue: '',
    animations: '', // 动画列表
    events: {}, // 事件列表
    style: {
      top: 20,
      left: 20,
      width: 100,
      height: 20,
      'border-width': 1,
      'border-style': 'solid',
      'border-color': '#000000',
      "border-bottom-style": 'solid',
      "border-top-style": 'none',
      "border-left-style": 'none',
      "border-right-style": 'none'
    }
  },
  {
    ...comBaseMap[COM_TYPE.TEXT],
    propValue: '文本组件',
    animations: '', // 动画列表
    events: {}, // 事件列表
    style: {
      top: 20,
      left: 20,
      width: 76,
      height: 40,
      padding: 10,
      'font-size': 14
    }
  },
  {
    ...comBaseMap[COM_TYPE.IMAGE],
    propValue: 'https://cdn.jsdelivr.net/gh/zhan-hc/image/blog/avatar/avatar1.png',
    animations: '', // 动画列表
    events: {}, // 事件列表
    style: {
      top: 20,
      left: 20,
      width: 100,
      height: 100,
      padding: 10,
      'font-size': 14,
      'border-width': 0,
      border: '0px solid #000'
    }
  }
]

// 组件对应的配置属性
export const comOptions = {
  [COM_TYPE.FRAME]:[
    {
      key: 'border-color',
      label: '颜色',
      type: '',
      component: 'colorPicker',
      value: '#000000',
    },
    {
      key: 'background-color',
      label: '背景色',
      type: '',
      component: 'colorPicker',
      value: 'transparent',
    },
    {
      key: 'border-width',
      label: '宽度',
      type: 'input',
      inputType: 'number',
      value: 1
    },
    {
      key: 'border-direction',
      label: '方向',
      type: '',
      component: markRaw(BorderDirection),
      inputType: '',
      value: ['bottom']
    },
    {
      key: 'border-radius',
      label: '圆角',
      type: '',
      component: markRaw(BorderRadius),
      inputType: '',
      value: [0,0,0,0],
    }
  ],
  [COM_TYPE.TEXT]: [
    {
      key: 'editor',
      label: '',
      type: '',
      component: 'editor',
      value: ''
    }
  ],
  [COM_TYPE.IMAGE]: [
    {
      key: 'background',
      label: '颜色',
      type: '',
      component: 'colorPicker',
      value: '#fff',
    },
    {
      key: 'border-width',
      label: '宽度',
      type: 'input',
      inputType: 'number',
      value: 1,
    },
    {
      key: 'border-radius',
      label: '圆角',
      type: '',
      component: markRaw(BorderRadius),
      inputType: '',
      value: [0,0,0,0]
    },
    {
      key: 'image-src',
      label: '图片',
      type: '',
      component:  markRaw(ImagePicker),
      value: 'fill',
    },
    {
      key: 'object-fit',
      label: '模式',
      type: '',
      component:  markRaw(ObjFit),
      value: 'fill',
        }
  ]
}