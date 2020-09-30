/**
 * @description 排序算法
 * @author ronffy
 * @Date 2020-09-29 18:10:33
 * @LastEditTime 2020-09-30 15:56:00
 * @LastEditors ronffy
 */
import bubbleSort from '../src/order/bubbleSort';
import selectionSort from '../src/order/selectionSort';
import insertionSort from '../src/order/insertionSort';
import getRandomArray from '../src/utils/getRandomArray';

const demoArray = getRandomArray(6, 0, 5);

console.log('demoArray', demoArray);

console.log('bubble', bubbleSort([...demoArray]));

console.log('selectionSort', selectionSort([...demoArray]));

console.log('insertionSort', insertionSort([...demoArray]));
