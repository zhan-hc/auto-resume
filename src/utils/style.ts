export const getComStyle = (styleObj, filterStyleArr = ['top', 'left']) => {
  // 需要填充px的css属性
  const fillPXCssArr = [
    'width', 'height', 'line-height',
    'top', 'left', 'right', 'bottom', 
    'margin', 'margin-top', 'margin-left', 'margin-right', 'margin-bottom',
    'padding', 'padding-top', 'padding-left', 'padding-right', 'padding-bottom',
    'font-size', 
    'border-width', 'outline-width', 
    'border-bottom-width', 'border-top-width', 'border-left-width', 'border-right-width',
    'letter-spacing', 'word-spacing',
    'text-indent',
    'max-width', ' min-width', 'max-height', 'min-height'
  ]
  const cssObj = {}
  for (const prop in styleObj) {
    cssObj[prop] = styleObj[prop] + ((fillPXCssArr.includes(prop) && !filterStyleArr.includes(prop)) ? 'px' : '')
  }
  return cssObj
}

export const getShapeStyle = ({top = 0, left = 0, width = 0, height = 0}) => {
  return {
    top: `${top}px`,
    left: `${left}px`,
    width: `${width}px`,
    height: `${height}px`,
  }
}

// 获取组件的上下左右中间等值
export const getComDirectionStyle = (style) => {
  style = { ...style }
  style.bottom = style.top + style.height
  style.right = style.left + style.width
  style.halfWidth = style.width / 2
  style.halfHeight = style.height / 2
  return style
}