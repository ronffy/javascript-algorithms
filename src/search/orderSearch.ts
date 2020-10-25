/**
 * @description 顺序搜索
 * @author ronffy
 * @Date 2020-10-22 10:45:54
 * @LastEditTime 2020-10-22 11:30:15
 * @LastEditors ronffy
 */
import compare from '../utils/compare';

export default function orderSearch(array, value, isEqual = compare.isEqual) {
  for (const [i, item] of array.entries()) {
    if (isEqual(item, value)) {
      return i
    }
  }
  return -1;
}
