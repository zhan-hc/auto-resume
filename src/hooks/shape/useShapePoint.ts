/** 生成拖拽元素的八个点 */

export default function (option: any) {
  const pointList = ['t', 'r', 'b', 'l', 'lt', 'rt', 'lb', 'rb']
  const directionKey = {
    lb: 'ne',
    rt: 'ne',
    lr: 'nw',
    rb: 'nw',
    l: 'e',
    r: 'e',
    t: 'n',
    b: 'n'
  }
  const getPointStyle = (point) => {
    const { width, height } = option.style
    const hasT = /t/.test(point)
    const hasB = /b/.test(point)
    const hasL = /l/.test(point)
    const hasR = /r/.test(point)
    let newLeft = 0
    let newTop = 0

    // 四个角的点
    if (point.length === 2) {
      newLeft = hasL? 0 : width
      newTop = hasT? 0 : height
    } else {
      // 上下两点的点，宽度居中
      if (hasT || hasB) {
        newLeft = width / 2
        newTop = hasT? 0 : height
      }

      // 左右两边的点，高度居中
      if (hasL || hasR) {
        newLeft = hasL? 0 : width
        newTop = Math.floor(height / 2)
      }
    }

    const style = {
      marginLeft: hasR? '-4px' : '-3px',
      marginTop: '-3px',
      left: `${newLeft}px`,
      top: `${newTop}px`,
      cursor: `${directionKey[point]}-resize`
    }

    return style
  }

  return {
    pointList,
    getPointStyle
  }
}