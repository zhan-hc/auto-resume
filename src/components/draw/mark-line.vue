<template>
  <div class="mark-line">
    <div 
      class="line"
      v-for="line in lines"
      v-show="lineStatus[line].status"
      :key="line"
      :class="line.includes('x') ? 'x-line' : 'y-line'"
      :style="line.includes('x') ? `top: ${lineStatus[line].top}px` : `left:${lineStatus[line].left}px`"
     ></div>
  </div>
</template>

<script lang='ts' setup>
import { ref } from "vue";
import bus from '@/utils/bus'
import useComFunc from '@/hooks/common/useComFunc'
import { getComDirectionStyle } from "@/utils/style";

const { comList } = useComFunc()
const diff = 3 // 偏移量则吸附
const lines = ref(['xt', 'xc', 'xb', 'yl', 'yc', 'yr'])
const lineStatus = ref({
  xt: {
    status: false,
    top: 0
  },
  xc: {
    status: false,
    top: 0
  },
  xb: {
    status: false,
    top: 0
  },
  yl: {
    status: false,
    left: 0
  },
  yc: {
    status: false,
    left: 0
  },
  yr: {
    status: false,
    left: 0
  },
})

const hideLines = () => {
  lines.value.forEach(item => {
    lineStatus.value[item].status = false
  })
}

bus.on('move', data => {
  showLine(data)
})

bus.on('unmove', () => {
  hideLines()
})

const showLine = ( { id, isDown, isRight } ) => {
  hideLines()
  const dragCom = comList.value.find(item => item.id === id)
  const dragComStyle = getComDirectionStyle(dragCom.style)

  comList.value.forEach(com => {
    if (id === com.id) return
    const curComStyle = getComDirectionStyle(com.style)
    const conditions = {
      top: [
        {
          isNearly: isNearly(dragComStyle.top, curComStyle.top), // 拖拽组件上边界与画布组件上边界对齐
          line: 'xt',
          dragShift: curComStyle.top,
          lineShift: curComStyle.top
        },
        {
          isNearly: isNearly(dragComStyle.bottom, curComStyle.top), // 拖拽组件下边界与画布组件上边界对齐
          line: 'xt',
          dragShift: curComStyle.top - dragComStyle.height,
          lineShift: curComStyle.top
        },
        {
          isNearly: isNearly(dragComStyle.top + dragComStyle.halfHeight, curComStyle.top + curComStyle.halfHeight), // 拖拽组件与画布组件水平中间对齐
          line: 'xc',
          dragShift: curComStyle.top + curComStyle.halfHeight - dragComStyle.halfHeight,
          lineShift: curComStyle.top + curComStyle.halfHeight
        },
        {
          isNearly: isNearly(dragComStyle.top, curComStyle.bottom), // 拖拽组件上边界与画布组件下边界对齐
          line: 'xb',
          dragShift: curComStyle.bottom,
          lineShift: curComStyle.bottom
        },
        {
          isNearly: isNearly(dragComStyle.bottom, curComStyle.bottom), // 拖拽组件下边界与画布组件下边界对齐
          line: 'xb',
          dragShift: curComStyle.bottom - dragComStyle.height,
          lineShift: curComStyle.bottom
        },
      ],
      left: [
        {
          isNearly: isNearly(dragComStyle.left, curComStyle.left), // 拖拽组件左边界与画布组件左边界对齐
          line: 'yl',
          dragShift: curComStyle.left,
          lineShift: curComStyle.left
        },
        {
          isNearly: isNearly(dragComStyle.right, curComStyle.left), // 拖拽组件右边界与画布组件左边界对齐
          line: 'yl',
          dragShift: curComStyle.left - dragComStyle.width,
          lineShift: curComStyle.left
        },
        {
          isNearly: isNearly(dragComStyle.left + dragComStyle.halfWidth, curComStyle.left + curComStyle.halfWidth), // 拖拽组件与画布组件垂直中间对齐
          line: 'yc',
          dragShift: curComStyle.left + curComStyle.halfWidth - dragComStyle.halfWidth,
          lineShift: curComStyle.left + curComStyle.halfWidth
        },
        {
          isNearly: isNearly(dragComStyle.left, curComStyle.right), // 拖拽组件左边界与画布组件右边界对齐
          line: 'yr',
          dragShift: curComStyle.right,
          lineShift: curComStyle.right
        },
        {
          isNearly: isNearly(dragComStyle.right, curComStyle.right), // 拖拽组件右边界与画布组件右边界对齐
          line: 'yr',
          dragShift: curComStyle.right - dragComStyle.width,
          lineShift: curComStyle.right
        },
      ]
    }

    const needShowLines = []
    Object.keys(conditions).forEach(dire => {
      conditions[dire].forEach((condition) => {
        if (!condition.isNearly) return
        needShowLines.push(condition.line)
        lineStatus.value[condition.line][dire] = condition.lineShift
        dragCom.style[dire] = condition.dragShift
      })
    })
    // 标线展示优化
    if (isRight) {
      if (needShowLines.includes('yl')) {
        lineStatus.value['yl'].status = true
      } else if (needShowLines.includes('yc')) {
        lineStatus.value['yc'].status = true
      } else if (needShowLines.includes('yr')) {
        lineStatus.value['yr'].status = true
      }
    } else {
      if (needShowLines.includes('yr')) {
        lineStatus.value['yr'].status = true
      } else if (needShowLines.includes('yc')) {
        lineStatus.value['yc'].status = true
      } else if (needShowLines.includes('yl')) {
        lineStatus.value['yl'].status = true
      }
    }
    if (isDown) {
      if (needShowLines.includes('xt')) {
        lineStatus.value['xt'].status = true
      } else if (needShowLines.includes('xc')) {
        lineStatus.value['yc'].status = true
      } else if (needShowLines.includes('xb')) {
        lineStatus.value['xb'].status = true
      }
    } else {
      if (needShowLines.includes('xb')) {
        lineStatus.value['xb'].status = true
      } else if (needShowLines.includes('xc')) {
        lineStatus.value['yc'].status = true
      } else if (needShowLines.includes('xt')) {
        lineStatus.value['xt'].status = true
      }
    }
  });
}

// 判断两个拖拽组件和画布组件的目标值边界是否对齐
const isNearly = (dragValue, targetValue) => {
  return Math.abs(dragValue - targetValue) <= diff
}
</script>

<style scoped lang='scss'>
  .line {
    position: absolute;
    background: $primary-color-shallow;
  }
  .x-line {
    width: 100%;
    height: 1px;
  }
  .y-line {
    height: 100%;
    width: 1px;
  }
</style>