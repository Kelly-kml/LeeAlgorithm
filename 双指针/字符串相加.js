/**
 * @description https://leetcode.cn/problems/add-strings/
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
/**
 * 解题思路：
 * （1）用两个指针i和j分别指向两个字符串的末尾，从末尾开始逐位相加。
 * （2）每次取出对应位的数字a和b，计算他们的和a+b+c，其中c是上一次相加的进位，
 * （3）最后将a+b+c的个位数添加到答案字符串的末尾，然后将a+b+c的十位数作为进位c的值，循环此过程直至两个字符串的指针都已经指向了字符串的开头并且进位c为0。
 * （4）最后将答案字符串反转并返回即可。
 */
var addStrings = function (num1, num2) {
  let i = num1.length - 1
  let j = num2.length - 1
  const ans = []
  for (let c = 0; i >= 0 || j >= 0 || c; --i, --j) {
    c += i < 0 ? 0 : parseInt(num1.charAt(i), 10)
    c += j < 0 ? 0 : parseInt(num2.charAt(j), 10)
    ans.push(c % 10)
    c = Math.floor(c / 10)
  }
  return ans.reverse().join('')
}


// 拓展
// 字符串相减
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var subStrings = function (num1, num2) {
  const m = num1.length
  const n = num2.length

  // 与字符串相加相比，增加的步骤：先判断两个字符串大小，要保证大的减去小的
  const neg = m < n || (m == n && num1 < num2)
  if (neg) {
    const t = num1
    num1 = num2
    num2 = t
  }

  let i = num1.length - 1
  let j = num2.length - 1
  const ans = []
  for (let c = 0; i >= 0; --i, --j) {
    c = parseInt(num1.charAt(i), 10) - c
    if (j >= 0) {
      c -= parseInt(num2.charAt(j), 10)
    }
    ans.push((c + 10) % 10)
    c = c < 0 ? 1 : 0
  }
  while (ans.length > 1 && ans[ans.length - 1] == '0') {
    ans.pop()
  }

  // 如果num1>num2，那么需要答案字符串前面加上“-”
  if (neg) {
    ans.push('-')
  }
  return ans.reverse().join('')
}
