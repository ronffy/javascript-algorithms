/**
 * @description 比较大小的方法
 * @author ronffy
 * @Date 2020-09-25 14:41:49
 * @LastEditTime 2020-09-29 10:55:30
 * @LastEditors ronffy
 */

export class Compare {
  static LESS = -1
  static EQUAL = 0
  static BIG = 1
  static defaultCompare = (a, b) => a - b

  /**
   * @description 对比a、b两个值的大小
   * @return {number} > 0:a > b; <0: a < b; =0: a = b;
   */
  compare: (a: any, b: any) => number

  /**
   * @param {function} compareFn 可自定义a\b的对比方法
   */
  constructor(compareFn = Compare.defaultCompare) {
    this.compare = compareFn;
  }

  getResult = (a, b) => {
    const result = this.compare(a, b);
    if (result > 0) {
      return Compare.BIG
    } else if (result < 0) {
      return Compare.LESS
    }
    return Compare.EQUAL
  }

  isLess = (a, b) => {
    return this.getResult(a, b) === Compare.LESS
  }

  isBig = (a, b) => {
    return this.getResult(a, b) === Compare.BIG
  }

  isEqual = (a, b) => {
    return this.getResult(a, b) === Compare.EQUAL
  }

  // 判断值是否为空
  isEmpty = (v) => {
    return v == null
  }
}

const compare = new Compare();

export default compare
