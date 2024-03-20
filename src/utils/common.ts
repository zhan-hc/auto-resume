export const getComStyle = (styleObj, filterStyleArr = ['top', 'left']) => {
  // 需要填充px的css属性
  const fillPXCssArr = [
    'width', 'height', 'line-height',
    'top', 'left', 'right', 'top', 'bottom', 
    'margin', 'padding', 
    'font-size', 
    'border-width', 'outline-width', 
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