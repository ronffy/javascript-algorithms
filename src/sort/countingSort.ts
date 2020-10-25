/**
 * @description 计数排序
 * @author ronffy
 * @Date 2020-10-10 18:10:39
 * @LastEditTime 2020-10-10 19:24:36
 * @LastEditors ronffy
 */
import findMinMax from '../utils/findMinMax';

export default function countingSort(array, isBig?) {
  if (array.length < 2) {
    return array;
  }

  const counts = [];
  let [min] = findMinMax(array, isBig);
  for (let i = 0; i < array.length; i++) {
    // 优化：减小 counts 的长度
    const countIndex = array[i] - min;
    if (!counts[countIndex]) {
      counts[countIndex] = 0;
    }
    counts[countIndex]++;
  }

  let sortedIndex = 0;
  for (let j = 0; j < counts.length; j++) {
    let count = counts[j];
    // 处理数值重复的情况
    while (count > 0) {
      array[sortedIndex++] = j + min;
      count--;
    }
  }

  return array;
}
