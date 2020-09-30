/**
 * @description 归并排序
 * @author ronffy
 * @Date 2020-09-30 10:48:35
 * @LastEditTime 2020-09-30 17:10:54
 * @LastEditors ronffy
 */
import compare from '../utils/compare';

export default function mergeSort(array: any[], isBig = compare.isBig) {
  if (array.length <= 1) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, middle), isBig);
  const right = mergeSort(array.slice(middle), isBig);
  array = merge(left, right, isBig);
  return array;
}

function merge(left: any[], right: any[], isBig) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    result.push(
      isBig(left[i], right[j])
        ? right[j++]
        : left[i++]
    )
  }
  return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}