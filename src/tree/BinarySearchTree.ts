/**
 * @description 二叉搜索树
 * @author ronffy
 * @Date 2020-09-25 14:40:26
 * @LastEditTime 2020-09-29 15:34:33
 * @LastEditors ronffy
 */

import defaultCompare, { Compare } from '../utils/compare'
import TreeNode from '../utils/TreeNode';

export default class BinarySearchTree {
  root: TreeNode
  compare: Compare

  constructor(compare = defaultCompare) {
    this.root = null;
    this.compare = compare;
  }

  //  插入值
  insert(key) {
    if (this.compare.isEmpty(this.root)) {
      this.root = new TreeNode(key);
    } else {
      this.root = this.insertNode(this.root, key);
    }
  }
  protected insertNode(node, key) {
    const { isEmpty, isLess } = this.compare;
    if (isEmpty(node)) {
      return new TreeNode(key);
    }

    if (isLess(key, node.key)) {
      node.left = this.insertNode(node.left, key);
    } else {
      node.right = this.insertNode(node.right, key);
    }
    return node;
  }

  protected each_i = 0;
  /**
   * @param {'inOrder' | 'preOrder' | 'postOrder'} orderType 遍历方式（中序、前序、后序）
   */
  each(callback, orderType = 'inOrder') {
    this.each_i = 0;
    this.eachNode(this.root, {
      [orderType]: callback
    });
    this.each_i = 0;
  }
  protected eachNode(node, callbacks) {
    const {
      inOrder,
      preOrder,
      postOrder,
    } = callbacks;
    const { isEmpty } = this.compare;
    if (isEmpty(node)) {
      return;
    }
    preOrder && preOrder(node, this.each_i++); // 先序遍历
    if (node.left) {
      this.eachNode(node.left, callbacks);
    }
    inOrder && inOrder(node, this.each_i++); // 中序遍历
    if (node.right) {
      this.eachNode(node.right, callbacks);
    }
    postOrder && postOrder(node, this.each_i++); // 后序遍历
  }


  min() {
    if (this.compare.isEmpty(this.root)) {
      return;
    }
    return this.minNode(this.root);
  }
  protected minNode(node) {
    if (this.compare.isEmpty(node.left)) {
      return node;
    }
    return this.minNode(node.left);
  }


  max() {
    if (this.compare.isEmpty(this.root)) {
      return;
    }
    return this.maxNode(this.root);
  }
  protected maxNode(node) {
    if (this.compare.isEmpty(node.right)) {
      return node;
    }
    return this.maxNode(node.right);
  }


  search(key) {
    return this.searchNode(this.root, key);
  }
  protected searchNode(node, key) {
    const { isEmpty, isLess, isEqual } = this.compare;

    if (isEmpty(node)) {
      return false;
    }
    if (isEqual(key, node.key)) {
      return true;
    }
    if (isLess(key, node.key)) {
      return this.searchNode(node.left, key);
    } else {
      return this.searchNode(node.right, key);
    }
  }


  remove(key) {
    this.root = this.removeNode(this.root, key);
  }
  protected removeNode(node, key) {
    const { isEmpty, isEqual, isLess } = this.compare;
    if (isEmpty(node)) {
      return null;
    }

    if (isEqual(key, node.key)) {
      // 没有分支
      if (isEmpty(node.left) && isEmpty(node.right)) {
        return null;
      }
      
       // 只有左分支、只有右分支
      if (isEmpty(node.left)) {
        return node.right;
      } else if (isEmpty(node.right)) {
        return node.left;
      }
      // 你是最强的 最棒的 最亮的 最发光的
      // 拦不住你发芽
      // 你是最好的 最俏的 最妙的 最骄傲的
      // 尽情的盛开吧

      // 左右分支都存在
      const rightMin = this.minNode(node.right);
      node.key = rightMin.key;
      node.right = this.removeNode(node.right, rightMin.key);
      return node
    }
    
    if (isLess(key, node.key)) {
      node.left = this.removeNode(node.left, key);
    } else {
      node.right = this.removeNode(node.right, key);
    }
    return node;
  }
}
