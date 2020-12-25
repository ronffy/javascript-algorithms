/**
 * @description 堆
 * @author ronffy
 * @Date 2020-12-25 18:10:04
 * @LastEditTime 2020-12-25 18:37:08
 * @LastEditors ronffy
 */
export default class Heap {
  static defaultIsBig = (a, b) => a > b
  isBig = Heap.defaultIsBig
  protected heap = []
  corrector(_element1, _element2): boolean {
    throw new Error(`${this.constructor.name} 类被继承使用时，corrector 方法为必需定义项。`);
  }

  constructor(isBig) {
    this.isBig = isBig || Heap.defaultIsBig;
  }

  // 替换两个节点值
  swap(i, j) {
    const heap = this.heap;
    [heap[i], heap[j]] = [heap[j], heap[i]];
  }

  // 获取父节点索引
  parentIndex(i) {
    return (i - 1) >> 1;
  }
  // 获取左子节点索引
  leftIndex(i) {
    return i * 2 + 1;
  }
  // 获取右子节点索引
  rightIndex(i) {
    return i * 2 + 2;
  }

  // 上移
  shiftUp(index) {
    if (index == 0) return;
    const heap = this.heap;
    const i = this.parentIndex(index);
    if (this.corrector(heap[i], heap[index])) {
      this.swap(i, index);
      this.shiftUp(i);
    }
  }
  // 下移
  shiftDown(index) {
    const heap = this.heap;
    const lIndex = this.leftIndex(index);
    const rIndex = this.rightIndex(index);
    const minIndex = this.corrector(heap[lIndex], heap[rIndex]) ? rIndex : lIndex;
    if (heap[minIndex] < heap[index]) {
      this.swap(minIndex, index);
      this.shiftDown(minIndex);
    }
  }
  // 插入
  // 增加数据时，把新数据插入到数组末尾，通过上移确定位置
  insert(element) {
    this.heap.push(element);
    this.shiftUp(this.heap.length - 1);
  }
  // 删除堆顶
  // 删除数据时，把数组最后一个元素移到顶部，通过下移确定位置
  pop() {
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
  }
  // 删除任意值
  remove(val) {
    const i = this.heap.indexOf(val);
    this.heap[i] = this.heap.pop();
    this.shiftDown(i);
  }
  // 获取堆顶
  peek() {
    return this.heap[0];
  }
  // 获取堆的大小
  size() {
    return this.heap.length;
  }
}
