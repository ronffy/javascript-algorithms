/**
 * @description 树相关示例
 * @author ronffy
 * @Date 2020-09-25 15:12:18
 * @LastEditTime 2020-09-29 15:50:23
 * @LastEditors ronffy
 */
import BinarySearchTree from '../src/tree/BinarySearchTree'
import AVLTree from '../src/tree/AVLTree'

function insert(tree) {
  tree.insert(3)
  tree.insert(4)
  tree.insert(12)
  tree.insert(9)
  tree.insert(27)
  tree.insert(1)
  tree.insert(5)
  tree.insert(11)
  tree.insert(15)
  tree.insert(36)
  tree.insert(6)
  tree.insert(8)
}

const binarySearchTree = new BinarySearchTree();

insert(binarySearchTree)

// console.log(binarySearchTree.root);
// console.log('binarySearchTree', JSON.stringify(binarySearchTree.root));
console.log('--min:', binarySearchTree.min());
console.log('--max:', binarySearchTree.max());
console.log('--search6:', binarySearchTree.search(6));
console.log('--search8:', binarySearchTree.search(8));
binarySearchTree.remove(6);
console.log('--search6:', binarySearchTree.search(6));
// console.log(JSON.stringify(binarySearchTree.root));
// window.binarySearchTree = binarySearchTree;




const avlTree = new AVLTree();
insert(avlTree)

console.log('avlTree', JSON.stringify(avlTree.root));

avlTree.remove(1)
avlTree.remove(3)

console.log('avlTree', JSON.stringify(avlTree.root));

avlTree.invert();
console.log('avlTree', JSON.stringify(avlTree.root));


avlTree.each((node, i) => {
  console.log('avlTree each-' + i + ':', node.key);
})

window.avlTree = avlTree;
