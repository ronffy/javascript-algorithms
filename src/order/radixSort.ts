/**
 * @description 基数排序（只适用于数组里都是数字的情况）
 * @author ronffy
 * @Date 2020-10-09 11:28:02
 * @LastEditTime 2020-10-09 18:11:04
 * @LastEditors ronffy
 */
import findMinMax from '../utils/findMinMax';
import compare from '../utils/compare';
import getDigit from '../utils/getDigit';

export default function radixSort(array, radixBase = 10, isBig = compare.isBig) {
  if (array.length < 2) {
    return array
  }

  const [min, max] = findMinMax(array, isBig);
  let significantDigit = getDigit(min);

  while ((max - min) / significantDigit >= 1) {
    array = sortForRadix(array, radixBase, significantDigit, min);
    significantDigit *= radixBase;
  }
  
  return array;
}

function sortForRadix(array, radixBase, significantDigit, min) {
  let buckets = Array.from(new Array(radixBase), () => []);
  const aux = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const bucketIndex = Math.floor((element - min) / significantDigit % radixBase);
    buckets[bucketIndex].push(element);
  }

  for (let i = 0; i < buckets.length; i++) {
    aux.push(...buckets[i]);
  }

  return aux;
}
