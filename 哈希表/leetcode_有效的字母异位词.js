/**
 *@description https://leetcode.cn/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // 字母异位词，字符串一定是相等的，只是字母位置顺序不一样而已
  if (s.length !== t.length) {
    return false
  }
  const table = new Array(26).fill(0)
  for (let i = 0; i < s.length; ++i) {
    table[s.codePointAt(i) - 'a'.codePointAt(0)]++
  }
  for (let i = 0; i < t.length; ++i) {
    // codePointAt语法：'abc'.codePointAt(0)表示在Unicode 中的指定位置字母对应的编码号
    table[t.codePointAt(i) - 'a'.codePointAt(0)]--
    if (table[t.codePointAt(i) - 'a'.codePointAt(0)] < 0) {
      return false
    }
  }
  return true
}