/**
 * @description 计算一个数十进制下是几位数
 * @author ronffy
 * @Date 2020-10-09 16:39:17
 * @LastEditTime 2020-10-09 16:47:16
 * @LastEditors ronffy
 */
export default function getDigit(value): number {
  const radix = 10;
  return Math.pow(radix, parseInt(value).toString().length) / radix
}
