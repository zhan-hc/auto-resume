import { markRaw } from 'vue'
import RText from '@/components/common/r-text.vue'
import RFrame from '@/components/common/r-frame.vue'
import RImage from '@/components/common/r-image.vue'
import Editor from '@/components/editor/editor.vue'
import BorderDirection from '@/components/config/border/border-direction.vue'
import ObjFit from '@/components/config/image/obj-fit.vue'
import { COM_TYPE } from '@/dict/com'

// 组件基本信息
export const comBaseMap = {
  [COM_TYPE.FRAME]: {
    key: COM_TYPE.FRAME,
    label: '边框',
    component: markRaw(RFrame),
    icon: 'icon-frame',
  },
  [COM_TYPE.TEXT]: {
    key: COM_TYPE.TEXT,
    label: '文本',
    component: markRaw(RText),
    icon: 'icon-text',
  },
  [COM_TYPE.IMAGE]: {
    key: COM_TYPE.IMAGE,
    label: '图片',
    component: markRaw(RImage),
    icon: 'icon-img',
  }
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
      'border-bottom': '1px solid #000'
    }
  },
  {
    ...comBaseMap[COM_TYPE.TEXT],
    propValue: '这是文本组件',
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
    ...comBaseMap[COM_TYPE.IMAGE],
    propValue: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/icon.png?v=1556263038788',
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
export const comOption = {
  [COM_TYPE.FRAME]:[
    {
      groupLabel: '边框',
      groupOptions: [
        {
          label: '颜色',
          type: '',
          component: 'colorPicker',
          value: '#000000',
          class: 'option-color-picker'
        },
        {
          label: '宽度',
          type: 'input',
          inputType: 'number',
          value: 1,
          class: 'option-border-width'
        },
        {
          label: '方向',
          type: '',
          component: markRaw(BorderDirection),
          inputType: '',
          value: 'bottom',
          class: 'option-cb-label'
        },
        // {
        //   label: '样式',
        //   type: '',
        //   component: 'border-style',
        //   inputType: '',
        //   value: 'solid',
        // }
      ]
    }
  ],
  [COM_TYPE.TEXT]: [
    {
      groupLabel: '富文本',
      groupOptions: [
        {
          label: '',
          type: '',
          component: markRaw(Editor),
          value: '',
          class: ''
        }
      ]
    }
  ],
  [COM_TYPE.IMAGE]: [
    {
      groupLabel: '边框',
      groupOptions: [
        {
          label: '颜色',
          type: '',
          component: 'colorPicker',
          value: '#000000',
          class: 'option-color-picker'
        },
        {
          label: '宽度',
          type: 'input',
          inputType: 'number',
          value: 1,
          class: 'option-border-width'
        }
      ]
    },
    {
      groupLabel: '图像',
      groupOptions: [
        {
          label: '模式',
          type: '',
          component:  markRaw(ObjFit),
          value: 'cover',
        }
      ]
    }
  ]
}
  