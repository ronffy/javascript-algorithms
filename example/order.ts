/**
 * @description 排序算法
 * @author ronffy
 * @Date 2020-09-29 18:10:33
 * @LastEditTime 2020-09-30 17:09:32
 * @LastEditors ronffy
 */
import getRandomArray from '../src/utils/getRandomArray';
import bubbleSort from '../src/order/bubbleSort';
import selectionSort from '../src/order/selectionSort';
import insertionSort from '../src/order/insertionSort';
import mergeSort from '../src/order/mergeSort';

const demoArray = getRandomArray(100, 0, 100);

console.log('demoArray:', demoArray);

console.log('bubble:', bubbleSort([...demoArray]));

console.log('selectionSort:', selectionSort([...demoArray]));

console.log('insertionSort:', insertionSort([...demoArray]));

console.log('mergeSort:', mergeSort([...demoArray]));
