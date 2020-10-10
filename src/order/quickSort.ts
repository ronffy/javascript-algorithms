/**
 * @description 快速排序
 * @author ronffy
 * @Date 2020-10-09 18:19:20
 * @LastEditTime 2020-10-10 11:07:37
 * @LastEditors ronffy
 */
import compare from '../utils/compare';
import swap from '../utils/swap';

export default function quickSort(array, isBig = compare.isBig) {
  if (array.length < 2) {
    return array;
  }
  return sort(array, 0, array.length - 1, isBig);
}

function sort(array, left, right, isBig) {
  let index = partition(array, left, right, isBig);
  if (left < index - 1) {
    sort(array, left, index - 1, isBig);
  }
  if (index < right) {
    sort(array, index, right, isBig);
  }
  
  return array;
}

function partition(array, left, right, isBig) {
  // 中轴
  const povit = array[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;
  while (i <= j) {
    while (isBig(povit, array[i])) {
      i++;
    }
    while (isBig(array[j], povit)) {
      j--;
    }
    if (i <= j) {
      swap(array, i, j);
      i++;
      j--;
    }
  }
  return i;
}
