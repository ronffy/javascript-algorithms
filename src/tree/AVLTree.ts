/**
 * @description 二叉平衡树
 * @author ronffy
 * @Date 2020-09-25 17:27:10
 * @LastEditTime 2020-09-28 17:51:44
 * @LastEditors ronffy
 */
import BinarySearchTree from './BinarySearchTree';
import defaultCompare from '../utils/compare'
import TreeNode from '../utils/TreeNode';

class Balance {
  static UNBALANCED_RIGHT = -2
  static SLIGHTLY_UNBALANCED_RIGHT = -1
  static BALANCED = 0
  static SLIGHTLY_UNBALANCED_LEFT = 1
  static UNBALANCED_LEFT = 2
  static ERROR_FACTOR = 99

  getFactor(diff) {
    switch (diff) {
      case -2:
        return Balance.UNBALANCED_RIGHT
      case -1:
        return Balance.SLIGHTLY_UNBALANCED_RIGHT
      case 0:
        return Balance.BALANCED
      case 1:
        return Balance.SLIGHTLY_UNBALANCED_LEFT
      case 2:
        return Balance.UNBALANCED_LEFT

      default:
        return Balance.ERROR_FACTOR
    }
  }

  // 平衡
  isBalance = (diff) =>
    this.getFactor(diff) === Balance.BALANCED

  // 右不平衡
  isUnBalanceRight = (diff) =>
    this.getFactor(diff) === Balance.UNBALANCED_RIGHT
  // 右稍不平衡
  isUnBalanceSlightlyRight = (diff) =>
    this.getFactor(diff) === Balance.SLIGHTLY_UNBALANCED_RIGHT

  // 左不平衡
  isUnBalanceLeft = (diff) =>
    this.getFactor(diff) === Balance.UNBALANCED_LEFT
  // 左稍不平衡
  isUnBalanceSlightlyLeft = (diff) =>
    this.getFactor(diff) === Balance.SLIGHTLY_UNBALANCED_LEFT

}


const balance = new Balance();


export default class AVLTree extends BinarySearchTree {  
  constructor(compare = defaultCompare) {
    super(compare);
    this.root = null;
    this.compare = compare;
  }


  getNodeHeight(node) {
    if (node == null) {
      return -1;
    }

    return Math.max(
      this.getNodeHeight(node.left),
      this.getNodeHeight(node.right),
    ) + 1
  }

  // 向右旋转一下
  rotateR(node) {
    const tmp = node.left;
    node.left = tmp.right;
    tmp.right = node;
    return tmp;
  }

  // 向左旋转一下
  rotateL(node) {
    const tmp = node.right;
    node.right = tmp.left;
    tmp.left = node;
    return tmp;
  }

  // 左侧子节点左旋转一下，当前节点右旋转一下
  rotateLLR(node) {
    node.left = this.rotateL(node.left);
    return this.rotateR(node);
  }
  // 右侧子节点右旋转一下，当前节点左旋转一下
  rotateRRL(node) {
    node.right = this.rotateR(node.right);
    return this.rotateL(node);
  }

  getNodeHeightDiff(node) {
    return this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
  }

  // 插入值
  insert(key) {
    this.root = this.insertNode(this.root, key);
  }
  insertNode(node, key) {
    const { isEmpty, isLess, isEqual } = this.compare;
    if (isEmpty(node)) {
      return new TreeNode(key);
    }
    if (isEqual(key, node.key)) {
      return node;
    }

    if (isLess(key, node.key)) {
      node.left = this.insertNode(node.left, key);
    } else {
      node.right = this.insertNode(node.right, key);
    }

    return this.rotateBalance(node, key);
  }

  rotateBalance(node, key) {
    if (!node) {
      return node;
    }
    const heightDiff = this.getNodeHeightDiff(node)
    const { isBalance, isUnBalanceLeft, isUnBalanceRight } = balance;
    const { isLess, isBig } = this.compare;

    if (isBalance(heightDiff)) {
      return node;
    }

    // 左侧重
    if (isUnBalanceLeft(heightDiff)) {
      if (isLess(key, node.left.key)) {
        node = this.rotateR(node);
      } else {
        node = this.rotateLLR(node);
      }
    } else if (isUnBalanceRight(heightDiff)) { // 右侧重
      if (isBig(key, node.right.key)) {
        node = this.rotateL(node);
      } else {
        node = this.rotateRRL(node);
      }
    }

    return node;
  }
}
