/**
 * @description 最小堆
 * @author ronffy
 * @Date 2020-12-25 18:14:50
 * @LastEditTime 2020-12-25 18:15:17
 * @LastEditors ronffy
 */
import Heap from './Heap';

export default class MinHeap extends Heap {
  constructor(isBig) {
    super(isBig);
  }

  // 校正器
  corrector(firstElement, secondElement) {
    return this.isBig(firstElement, secondElement);
  }
}
