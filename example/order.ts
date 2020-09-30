/**
 * @description 排序算法
 * @author ronffy
 * @Date 2020-09-29 18:10:33
 * @LastEditTime 2020-09-30 10:38:49
 * @LastEditors ronffy
 */
import bubbleSort from '../src/order/bubbleSort';
import selectionSort from '../src/order/selectionSort';


const demoArray = [9, 1, 3, 4, 12, 16, 2, 14, 8]

console.log('origin', demoArray);

console.log('bubble', bubbleSort([...demoArray]));

console.log('selectionSort', selectionSort([...demoArray]));
