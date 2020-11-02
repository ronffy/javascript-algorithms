/**
 * @description 
 * @author ronffy
 * @Date 2020-11-02 11:41:22
 * @LastEditTime 2020-11-02 11:53:03
 * @LastEditors ronffy
 */
import { LinkedList } from '../src/linkedList'

const linkedList = new LinkedList();

linkedList.insert(3)
linkedList.insert(4)
linkedList.insert(2)
linkedList.insert(1)

console.log(linkedList);


console.log(linkedList.search(2))
console.log(linkedList.search(3))
console.log(linkedList.remove(0))

console.log(linkedList.size())

console.log(linkedList.remove(4))
console.log(linkedList.remove(3))
console.log(linkedList.remove(0))

console.log(linkedList.size())

console.log(linkedList);
