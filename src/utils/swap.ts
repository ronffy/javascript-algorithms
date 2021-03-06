/**
 * @description 置换 array 数组里 i 、b 的位置
 * @author ronffy
 * @Date 2020-09-29 18:03:55
 * @LastEditTime 2020-10-27 16:36:55
 * @LastEditors ronffy
 */
export default function swap(array, i, j) {
  if (i !== j) {
    [array[i], array[j]] = [array[j], array[i]]
  }
  return array;
}
