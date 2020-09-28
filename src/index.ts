/**
 * @description 
 * @author ronffy
 * @Date 2020-09-25 15:12:18
 * @LastEditTime 2020-09-28 17:53:11
 * @LastEditors ronffy
 */
import BinarySearchTree from './tree/BinarySearchTree'
import AVLTree from './tree/AVLTree'

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


//         3
//     2       4
//   1           9 
//            6     11 
//           5  7      17
//                   15
//                 13




//          7
//       6     9
//     3          11
//   2                17
// 1                15
//                13



//      3
//   2       6
// 1     4       11    
//        5    9   15
//           7    13 17





//       6
//   3        11
//  2  4    9   15
// 1    5  7   13 17







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

