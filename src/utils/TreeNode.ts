/**
 * @description 树节点
 * @author ronffy
 * @Date 2020-09-25 14:40:44
 * @LastEditTime 2020-09-28 17:52:06
 * @LastEditors ronffy
 */
export default class TreeNode {
  key: any
  left: TreeNode
  right: TreeNode

  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}