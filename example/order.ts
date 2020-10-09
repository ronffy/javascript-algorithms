/**
 * @description 排序算法
 * @author ronffy
 * @Date 2020-09-29 18:10:33
 * @LastEditTime 2020-09-30 19:03:50
 * @LastEditors ronffy
 */
import getRandomArray from '../src/utils/getRandomArray';
import bubbleSort from '../src/order/bubbleSort';
import selectionSort from '../src/order/selectionSort';
import insertionSort from '../src/order/insertionSort';
import mergeSort from '../src/order/mergeSort';
import bucketSort from '../src/order/bucketSort';

const demoArray = getRandomArray(100, 0, 100);

demoArray.push(10000)

console.log('demoArray:', demoArray);

console.log('bubble:', bubbleSort([...demoArray]));

console.log('selectionSort:', selectionSort([...demoArray]));

console.log('insertionSort:', insertionSort([...demoArray]));

console.log('mergeSort:', mergeSort([...demoArray]));

console.log('bucketSort:', bucketSort([...demoArray]));
