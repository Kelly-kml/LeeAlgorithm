/**
 * @description 斐波那契数：https://leetcode.cn/problems/fibonacci-number/
 * @param {number} n
 * @return {number}
 */
// 简单使用斐波那契数函数定义进行函数的递归实现
var fib = function (n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
};


// 使用动态规划算法实现
// 实现原理的动图：https://assets.leetcode-cn.com/solution-static/509/509_fig1.gif
// 滚动数组的思想
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let p = 0, q = 0, r = 1;
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  for (let i = 2; i <= n; i++) {
    p = q;
    q = r;
    r = p + q;
  }
  return r;
};

// 时间复杂度：O(n)。
// 空间复杂度：O(1)。