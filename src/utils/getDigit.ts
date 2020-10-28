/**
 * @description 计算一个数十进制下是几位数
 * @author ronffy
 * @Date 2020-10-09 16:39:17
 * @LastEditTime 2020-10-26 18:16:53
 * @LastEditors ronffy
 */
export default function getDigit(value): number {
  if (typeof value !== 'string' || typeof value !== 'number' || value === '') {
    return 0;
  }
  const radix = 10;
  return Math.pow(radix, parseInt(value).toString().length - 1)
}
