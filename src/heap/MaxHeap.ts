/**
 * @description 最大堆
 * @author ronffy
 * @Date 2020-12-25 18:14:50
 * @LastEditTime 2020-12-25 18:37:19
 * @LastEditors ronffy
 */
import Heap from './Heap';

export default class MaxHeap extends Heap {
  constructor(isBig) {
    super(isBig);
  }

  // 校正器
  corrector(firstElement, secondElement): boolean {
    return this.isBig(secondElement, firstElement);
  }
}
