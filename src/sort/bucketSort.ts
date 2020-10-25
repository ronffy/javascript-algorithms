/**
 * @description 桶排序（只适用于数组里都是数字的情况）
 * @author ronffy
 * @Date 2020-09-30 18:17:38
 * @LastEditTime 2020-10-09 11:44:25
 * @LastEditors ronffy
 */
import compare from '../utils/compare';
import insertionSort from './insertionSort';
import findMinMax from '../utils/findMinMax';

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

  // 查找数组中最大和最小值
  const [min, max] = findMinMax(array, isBig);
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
