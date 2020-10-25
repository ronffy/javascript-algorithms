/**
 * @description 冒泡排序
 * @author ronffy
 * @Date 2020-09-29 18:01:19
 * @LastEditTime 2020-09-29 20:12:38
 * @LastEditors ronffy
 */
import compare from '../utils/compare';
import swap from '../utils/swap';

export default function bubbleSort(array, isBig = compare.isBig) {
  let length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      const next = j + 1;
      if (isBig(array[j], array[next])) {
        swap(array, j, next);
      }
    }
  }
  return array;
}
