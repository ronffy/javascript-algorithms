/**
 * @description 插入排序
 * @author ronffy
 * @Date 2020-09-30 10:48:35
 * @LastEditTime 2020-09-30 15:55:09
 * @LastEditors ronffy
 */
import compare from '../utils/compare';

export default function insertionSort(array, isBig = compare.isBig) {
  const length = array.length;
  let temp;
  for (let i = 1; i < length; i++) {
    let j = i;
    temp = array[i];
    while (j > 0 && isBig(array[j - 1], temp)) {
      array[j] = array[j - 1]
      j--;
    }
    array[j] = temp;
  }
  return array;
}
