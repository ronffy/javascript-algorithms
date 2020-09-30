/**
 * @description 生成一个（可选）指定范围的整数随机数
 * @author ronffy
 * @Date 2020-09-30 14:30:42
 * @LastEditTime 2020-09-30 15:43:15
 * @LastEditors ronffy
 */
export default function getRandom(min?, max?): number {
  if (typeof min === 'undefined' && typeof max === 'undefined') {
    return Math.floor(Math.random() * 10000);
  }
  if (
    (typeof min === 'undefined' && typeof max !== 'undefined')
    || (typeof min !== 'undefined' && typeof max === 'undefined')
  ) {
    console.error('getRandom 参数不完整.');
    return;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
