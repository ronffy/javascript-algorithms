/**
 * @description 二叉平衡树
 * @author ronffy
 * @Date 2020-09-25 17:27:10
 * @LastEditTime 2020-09-29 16:23:06
 * @LastEditors ronffy
 */
import BinarySearchTree from './BinarySearchTree';
import defaultCompare from '../utils/compare'
import TreeNode from '../utils/TreeNode';
import defaultBalance, { Balance } from '../utils/balance';

export default class AVLTree extends BinarySearchTree {
  // 平衡方法
  balance: Balance

  constructor(compare = defaultCompare, balance = defaultBalance) {
    super(compare);
    this.root = null;
    this.compare = compare;
    this.balance = balance;
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
  private rotateL(node) {
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

  getHeightDiff(node) {
    return this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
  }

  // 插入值
  insert(key) {
    this.root = this.insertNode(this.root, key);
  }

  protected insertNode(node, key) {
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

    return this.balanceInsertNode(node, key);
  }

  // 平衡执行插入操作后的节点
  protected balanceInsertNode(node, key) {
    if (!node) {
      return node;
    }
    const heightDiff = this.getHeightDiff(node)
    const { isBalance, isUnBalanceLeft, isUnBalanceRight } = this.balance;
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

  remove(key) {
    this.root = this.removeNode(this.root, key);
  }

  protected removeNode(node: TreeNode, key) {
    node = super.removeNode(node, key);
    node = this.balanceRemoveNode(node);
    return node;
  }

  // 平衡执行删除操作后的节点
  protected balanceRemoveNode(node) {
    const {
      isBalance,
      isUnBalanceLeft,
      isUnBalanceSlightlyLeft,
      isUnBalanceRight,
      isUnBalanceSlightlyRight
    } = this.balance;
    const { isEmpty } = this.compare;
    if (isEmpty(node)) {
      return null;
    }

    const heightDiff = this.getHeightDiff(node)
    if (isUnBalanceLeft(heightDiff)) {
      const leftNode = node.left;
      const diff = this.getHeightDiff(leftNode)
      if (isBalance(diff) || isUnBalanceSlightlyLeft(diff)) {
        return this.rotateR(node);
      }
      if (isUnBalanceRight(diff)) {
        return this.rotateLLR(leftNode)
      }
    }

    if (isUnBalanceRight(heightDiff)) {
      const rightNode = node.right;
      const diff = this.getHeightDiff(rightNode)
      if (isBalance(diff) || isUnBalanceSlightlyRight(diff)) {
        return this.rotateL(node);
      }
      if (isUnBalanceSlightlyLeft(diff)) {
        return this.rotateRRL(rightNode);
      }
    }

    return node;
  }

  // 左右翻转树
  invert() {
    this.root = this.invertNode(this.root);
  }

  protected invertNode(node: TreeNode) {
    const { isEmpty } = this.compare;
    if (isEmpty(node)) {
      return null;
    }
    const temp = node.left;
    node.left = this.invertNode(node.right);
    node.right = this.invertNode(temp);
    return node;
  }
}
