/**
 * @description 桶排序（只适用于数组里都是数字的情况）
 * @author ronffy
 * @Date 2020-09-30 18:17:38
 * @LastEditTime 2020-10-09 11:21:55
 * @LastEditors ronffy
 */
import compare from '../utils/compare';
import insertionSort from './insertionSort';

export default function bucketSort(array, bucketSize = 5, isBig = compare.isBig) {
  if (array.length <= bucketSize) {
    return insertionSort(array);
  }
  const buckets = createBuckets(array, bucketSize, isBig);
  return sortBuckets(buckets, isBig);
}

// 创建桶数组
function createBuckets(array, bucketSize, isBig) {
  let buckets = [];
  const length = array.length;

  // 找到数组中最大和最小值
  let min = array[0];
  let max = array[0];
  for (let i = 1; i < length; i++) {
    if (isBig(array[i], max)) {
      max = array[i]
    } else if (isBig(min, array[i])) {
      min = array[i]
    }
  }
  const diff = max - min;
  const count = Math.ceil(diff / bucketSize); // 桶的最大数量（可能存在空桶）

  for (let j = 0; j < length; j++) {
    const element = array[j];
    const bocketIndex = Math.ceil(element / count);
    if (!buckets[bocketIndex]) {
      buckets[bocketIndex] = [];
    }
    (buckets[bocketIndex]).push(element)
  }
  return buckets;
}

// 将桶数组里每一项使用插入排序进行排序
function sortBuckets(buckets, isBig) {
  let sortedArray = [];
  for (let bucketArr of buckets) {
    if (!bucketArr || !bucketArr.length) {
      continue;
    }
    bucketArr = insertionSort(bucketArr, isBig);
    sortedArray.push(...bucketArr)
  }
  return sortedArray;
}
