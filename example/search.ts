/**
 * @description 搜索排序
 * @author ronffy
 * @Date 2020-10-22 15:58:54
 * @LastEditTime 2020-10-26 17:33:08
 * @LastEditors ronffy
 */
import orderSearch from '../src/search/orderSearch';
import binarySearch from '../src/search/binarySearch';
import interpolationSearch from '../src/search/interpolationSearch';

const searchArray = [1, 2, 3, 7, 9, 12, 14, 15, 17, 20, 21, 24, 25, 27, 28, 30, 31, 34];

console.log('orderSearch', orderSearch(searchArray, 27));

console.log('binarySearch', binarySearch(searchArray, 27));
console.log('binarySearch', binarySearch(searchArray, 1));
console.log('binarySearch', binarySearch(searchArray, 21));

console.log('interpolationSearch', interpolationSearch(searchArray, 27));
console.log('interpolationSearch', interpolationSearch(searchArray, 34));