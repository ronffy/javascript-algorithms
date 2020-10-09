/**
 * @description 查找最大值和最小值
 * @author ronffy
 * @Date 2020-10-09 11:39:17
 * @LastEditTime 2020-10-09 14:26:29
 * @LastEditors ronffy
 */
import compare from '../utils/compare';

/**
 * @return {any[]} [min, max] 
 */
export default function findMinMax(array: any[], isBig = compare.isBig): [any?, any?] {
  if (!array) {
    return []
  }
  if (array.length < 2) {
    return [array[0]]
  }
  let min = array[0];
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (isBig(array[i], max)) {
      max = array[i]
    } else if (isBig(min, array[i])) {
      min = array[i]
    }
  }
  return [min, max]
}
