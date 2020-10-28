/**
 * @description 快速排序
 * @author ronffy
 * @Date 2020-10-09 18:19:20
 * @LastEditTime 2020-10-28 10:09:08
 * @LastEditors ronffy
 */
import compare from '../utils/compare';
import swap from '../utils/swap';

export default function quickSort(array, isBig = compare.isBig) {
  if (array.length < 2) {
    return array;
  }
  return sort(array, isBig, 0, array.length - 1);
}

function sort(array, isBig, start, end) {
  if (start >= end) {
    return array;
  }
  let l = start;
  let r = end;
  const temp = array[start];
  while (l < r) {
    while (l < r && !isBig(temp, array[r])) {
      r--;
    }
    while (l < r && !isBig(array[l], temp)) {
      l++;
    }
    swap(array, l, r);
  }
  swap(array, start, l);
  sort(array, isBig, start, l - 1);
  sort(array, isBig, l + 1, end);
  return array;
}
