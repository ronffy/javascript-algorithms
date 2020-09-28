/**
 * @description 平衡方法
 * @author ronffy
 * @Date 2020-09-28 18:09:17
 * @LastEditTime 2020-09-28 18:11:39
 * @LastEditors ronffy
 */

export class Balance {
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

export default balance