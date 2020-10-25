/**
 * @description 二叉搜索
 * @author ronffy
 * @Date 2020-10-22 10:45:54
 * @LastEditTime 2020-10-25 17:55:04
 * @LastEditors ronffy
 */
import compare from '../utils/compare';

export default function binarySearch(
  sortedArray, 
  value, 
  isEqual = compare.isEqual, 
  isBig = compare.isBig,
) {
  let startIndex = 0;
  let endIndex = sortedArray.length - 1;
  
  while (endIndex >= startIndex) {
    const middle = Math.floor((endIndex + startIndex) / 2);
    if (isEqual(value, sortedArray[middle])) {
      return middle;
    }
    if (isBig(value, sortedArray[middle])) {
      startIndex = middle + 1;
    } else {
      endIndex = middle - 1;
    }
  }

  return -1;
}
