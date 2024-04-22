/**
 * 处理简历模板
 */
import { tempMap } from '@/dict/config'
import useComFunc from '@/hooks/common/useComFunc'
import useSelectFunc from '@/hooks/common/useSelectFunc'
export default function () {

  const { setComlist } = useComFunc()
  const { setNULLSelectInfo } = useSelectFunc()

  const changeTemp = (key) => {
    setComlist(tempMap[key].list)
    setNULLSelectInfo()
  }
  

  return {
    tempMap,
    changeTemp
  }
}