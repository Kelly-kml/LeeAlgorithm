/**
 * @description https://leetcode.cn/problems/check-if-number-has-equal-digit-count-and-digit-value/
 * @param {string} num
 * @return {boolean}
 */
/**
 * 创建哈希表的思想
 * 时间复杂度：O(n) 对于整个列表长度（n）进行遍历
 * 空间复杂度：O(n) 哈希表的长度为列表的长度n
 */
var digitCount = function (num) {
  const h = new Map()
  const n = num.length
  // 创建哈希表，key为num[i]的字符编码-0对应的编码，value为digit+1
  for (let i = 0; i < n; i++) {
    const digit = num[i].charCodeAt() - '0'.charCodeAt()
    h.set(digit, (h.get(digit) || 0) + 1)
  }
  // 根据上述的哈希表，只需要比较num[i]对应的编码值-0 的编码与哈希表中value是否相同，不用就返回false。直接退出循环；如果相同就继续下一轮的循环，直接所有的循环都是true，才返回true退出循环
  for (let i = 0; i < n; i++) {
    const v = num[i].charCodeAt() - '0'.charCodeAt()
    if ((h.get(i) || 0) !== v) {
      return false
    }
  }
  return true
}