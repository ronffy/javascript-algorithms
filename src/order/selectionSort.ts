/**
 * @description 选择排序
 * @author ronffy
 * @Date 2020-09-29 20:16:23
 * @LastEditTime 2020-09-30 10:40:41
 * @LastEditors ronffy
 */
import compare from '../utils/compare';
import swap from '../utils/swap';

export default function selectionSort(array, isBig = compare.isBig) {
  let length = array.length;
  let minIndex;
  for (let i = 0; i < length; i++) {
    minIndex = i;
    for (let j = i + 1; j < length; j++) {
      if (isBig(array[minIndex], array[j])) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      swap(array, i, minIndex)
    }
  }

  return array;
}