import { temp_blue, temp_normal, temp_business } from './temp'

export const tempMap = {
  normal: {
    label: '普通模板',
    list: temp_normal,
    imgUrl: 'temp_normal.png'
  },
  blue: {
    label: '主题模板',
    list: temp_blue,
    imgUrl: 'temp_blue.png'
  },
  business: {
    label: '商务模板',
    list: temp_business,
    imgUrl: 'temp_business.png'
  },
}

export const leftTabs = [
  {
    label: '组件',
    key: 'com'
  },
  {
    label: '模板',
    key: 'temp'
  },
  {
    label: '结构',
    key: 'const'
  },
]

export const userInfo = {
  github_project_url: 'https://github.com/zhan-hc/auto-resume'
}