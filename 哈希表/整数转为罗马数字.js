/**
 * @description https://leetcode.cn/problems/integer-to-roman/
 * @param {number} num
 * @return {string}
 */

/**整数转为罗马数字的解题思路：
 * 1、建立一个hashMap哈希表，从大到小排列
 * 2、遍历哈希表，每一次循环，都将符合哈希表中的键值value减掉，并且将对应的key存到roman中，最后得到reman就是所求
 * 注意：（罗马数字规则为右边的值大于左边的值，实际代表的值为：右边-左边的值）
 */
var intToRoman = function (num) {
  const valueSymbols = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]]
  const roman = []
  for (const [value, symbol] of valueSymbols) {
    while (num >= value) {
      num -= value
      roman.push(symbol)
    }
    if (num == 0) {
      break
    }
  }
  return roman.join('')
}