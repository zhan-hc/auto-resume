export default function ({ style }: any) {

  const handleMouseDown = () => {
    const downEvent = window.event
    downEvent.stopPropagation()
    downEvent.preventDefault()
    const startX = downEvent.clientX
    const startY = downEvent.clientY
    const pos = style
    const top = Number(pos.top)
    const left = Number(pos.left)
    const handleMouseMove = (moveEvent) => {
      const currX = moveEvent.clientX
      const currY = moveEvent.clientY
      const disY = currY - startY
      const disX = currX - startX
      pos.left = left + disX
      pos.top = top + disY
    }
    const up = () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', up)
  }
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', up)
  }

  const handleMouseDownOnPoint = (point) => {
    const downEvent = window.event
    downEvent.stopPropagation()
    downEvent.preventDefault()
    const pos = style
    const height = Number(pos.height)
    const width = Number(pos.width)
    const top = Number(pos.top)
    const left = Number(pos.left)
    const startX = downEvent.clientX
    const startY = downEvent.clientY

    const move = (moveEvent) => {
      const currX = moveEvent.clientX
      const currY = moveEvent.clientY
      const disY = currY - startY
      const disX = currX - startX
      const hasT = /t/.test(point)
      const hasB = /b/.test(point)
      const hasL = /l/.test(point)
      const hasR = /r/.test(point)
      const newHeight = height + (hasT? -disY : hasB? disY : 0)
      const newWidth = width + (hasL? -disX : hasR? disX : 0)
      pos.height = newHeight > 0? newHeight : 0
      pos.width = newWidth > 0? newWidth : 0
      pos.left = left + (hasL? disX : 0)
      pos.top = top + (hasT? disY : 0)
    }

    const up = () => {
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseup', up)
    }

    document.addEventListener('mousemove', move)
    document.addEventListener('mouseup', up)
  }
  return {
    handleMouseDown,
    handleMouseDownOnPoint
  }
}