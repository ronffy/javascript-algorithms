/**
 * @description 列表节点
 * @author ronffy
 * @Date 2020-11-02 11:15:31
 * @LastEditTime 2020-11-02 11:21:18
 * @LastEditors ronffy
 */
export default class ListNode {
  value: any
  next: ListNode
  
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}