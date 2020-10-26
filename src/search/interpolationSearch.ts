/**
 * @description 内插搜索
 * @author ronffy
 * @Date 2020-10-25 18:17:29
 * @LastEditTime 2020-10-26 17:33:20
 * @LastEditors ronffy
 */
import compare from '../utils/compare';

export default function interpolationSearch(
  sortedArray,
  seekValue,
  isEqual = compare.isEqual,
  isBig = compare.isBig,
) {
  let startIndex = 0;
  let endIndex = sortedArray.length - 1;

  while (startIndex <= endIndex) {
    const {
      indexDiff,
      valueDiff,
      position,
    } = getPosition(sortedArray, seekValue, startIndex, endIndex);

    if (valueDiff < 0) {
      return -1;
    }

    if (indexDiff <= 0) {
      return !valueDiff ? startIndex : -1;
    }

    if (isEqual(seekValue, sortedArray[position])) {
      return position;
    }

    if (isBig(seekValue, sortedArray[position])) {
      startIndex = position + 1;
    } else {
      endIndex = position - 1;
    }
  }

  return -1;
}

function getPosition(sortedArray, seekValue, startIndex, endIndex) {
  // 范围差值
  const rangeDiff = sortedArray[endIndex] - sortedArray[startIndex];
  // 位置差值
  const indexDiff = endIndex - startIndex;
  // 要搜索值与范围起始位置值的差值
  const valueDiff = seekValue - sortedArray[startIndex];
  // 计算用来跟 seekValue 匹配的位置
  const position = Math.floor(startIndex + valueDiff / rangeDiff * indexDiff);

  return {
    rangeDiff,
    indexDiff,
    valueDiff,
    position,
  }
}

