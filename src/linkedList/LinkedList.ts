/**
 * @description 链表
 * @author ronffy
 * @Date 2020-11-02 11:15:31
 * @LastEditTime 2020-11-02 11:55:45
 * @LastEditors ronffy
 */
import ListNode from './ListNode';

export default class LinkedList {
  head: ListNode = null; // 头指针
  count = 0; // 层级

  isEmpty(node) {
    return node == null
  }

  // 插入值
  insert(value) {
    if (this.isEmpty(this.head)) {
      this.head = new ListNode(value);
      this.count++;
      return;
    }
    this.head = this.insertNode(this.head, value);
  }
  insertNode(node: ListNode, value) {
    if (this.isEmpty(node.next)) {
      node.next = new ListNode(value);
      this.count++;
      return node;
    }
    node.next = this.insertNode(node.next, value);
    return node;
  }

  size() {
    return this.count;
  }

  /**
   * @description 查找值
   * @param {any} value
   * @return {boolean | ListNode} false: 未查找到值 ListNode: 查找到的节点
   */
  search(value) {
    return this.searchNode(this.head, value);
  }
  searchNode(node: ListNode, value) {
    if (this.isEmpty(node)) {
      return false;
    }
    if (node.value === value) {
      return node;
    }
    return this.searchNode(node.next, value);
  }

  /**
   * @description 删除值
   * @param {any} value
   * @return {boolean} true: 删除成功 false: 未删除成功，没有找到 value 值
   */
  remove(value): boolean {
    if (this.isEmpty(this.head)) {
      return false;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.count--;
      return true;
    }

    let pre = this.head;
    let curr = this.head.next;

    while (!this.isEmpty(curr)) {
      if (curr.value === value) {
        pre.next = curr.next
        this.count--;
        return true;
      }
      pre = curr;
      curr = curr.next;
    }

    return false;
  }
}