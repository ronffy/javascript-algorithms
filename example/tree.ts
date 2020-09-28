/**
 * @description 树相关示例
 * @author ronffy
 * @Date 2020-09-25 15:12:18
 * @LastEditTime 2020-09-28 18:04:41
 * @LastEditors ronffy
 */
import BinarySearchTree from '../src/tree/BinarySearchTree'
import AVLTree from '../src/tree/AVLTree'

function insert(tree) {
  tree.insert(3)
  tree.insert(4)
  tree.insert(2)
  tree.insert(9)
  tree.insert(6)
  tree.insert(7)
  tree.insert(1)
  tree.insert(5)
  tree.insert(11)
  tree.insert(17)
  tree.insert(15)
  tree.insert(13)
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
avlTree.each((node, i) => {
  console.log('avlTree each-' + i + ':', node);
}, 'postOrder')

// window.avlTree = avlTree;



// console.log('avlTree', JSON.stringify(avlTree.root));

