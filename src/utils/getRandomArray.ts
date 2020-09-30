/**
 * @description 不重复随机整数的数组
 * @author ronffy
 * @Date 2020-09-30 14:30:42
 * @LastEditTime 2020-09-30 15:58:14
 * @LastEditors ronffy
 */
import getRandom from "./getRandom";

export default function getRandomArray(length, min?, max?): number[] {
  if (typeof length === 'undefined') {
    console.warn('getRandomArray 参数不完整.');
    return [];
  }

  if (
    typeof min !== 'undefined'
    && typeof max !== 'undefined'
    && (max - min < length - 1)
  ) {
    console.warn('getRandomArray max-min 范围不能小于length.');
    return []
  }

  const result = new Set<number>();
  while (result.size < length) {
    result.add(getRandom(min, max));
  }
  return [...result];
}
