/**
 * @description 排序算法
 * @author ronffy
 * @Date 2020-09-29 18:10:33
 * @LastEditTime 2020-10-10 17:30:16
 * @LastEditors ronffy
 */
import getRandomArray from '../src/utils/getRandomArray';
import bubbleSort from '../src/order/bubbleSort';
import selectionSort from '../src/order/selectionSort';
import insertionSort from '../src/order/insertionSort';
import mergeSort from '../src/order/mergeSort';
import bucketSort from '../src/order/bucketSort';
import radixSort from '../src/order/radixSort';
import quickSort from '../src/order/quickSort';

const demoArray = getRandomArray(20000, {
  min: 101,
  max: 100000,
  repeated: false,
});

console.log('demoArray:', demoArray);

console.time('bubble-time');
console.log('bubble:', bubbleSort([...demoArray]));
console.timeEnd('bubble-time');

console.time('selectionSort-time');
console.log('selectionSort:', selectionSort([...demoArray]));
console.timeEnd('selectionSort-time');

console.time('insertionSort-time');
console.log('insertionSort:', insertionSort([...demoArray]));
console.timeEnd('insertionSort-time');

console.time('mergeSort-time');
console.log('mergeSort:', mergeSort([...demoArray]));
console.timeEnd('mergeSort-time');

console.time('bucketSort-time');
console.log('bucketSort:', bucketSort([...demoArray]));
console.timeEnd('bucketSort-time');

console.time('radixSort-time');
console.log('radixSort:', radixSort([...demoArray]));
console.timeEnd('radixSort-time');

console.time('quickSort-time');
console.log('quickSort:', quickSort([...demoArray]));
console.timeEnd('quickSort-time');
