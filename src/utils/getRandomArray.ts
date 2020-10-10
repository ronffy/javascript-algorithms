/**
 * @description 不重复随机整数的数组
 * @author ronffy
 * @Date 2020-09-30 14:30:42
 * @LastEditTime 2020-10-10 17:35:31
 * @LastEditors ronffy
 */
import getRandom from "./getRandom";

interface Config {
  min?: number
  max?: number
  repeated?: boolean // 是否允许数组内有重复项
}

const defaultConfig: Config = {
  repeated: true,
}

export default function getRandomArray(length, config: Config = {}): number[] {
  const {
    min,
    max,
    repeated,
  } = {
    ...defaultConfig,
    ...config,
  };
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

  if (repeated) {
    return Array.from({ length }, () => getRandom(min, max));
  }

  const result = new Set<number>();
  while (result.size < length) {
    result.add(getRandom(min, max));
  }
  return [...result];
}
