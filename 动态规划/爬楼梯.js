/*
 * @Description: 
 * @author: kelly
 * @Date: 2024-01-05 14:48:36
 * @LastEditTime: 2024-01-05 14:56:58
 */
/**
 * @description 爬楼梯： https://leetcode.cn/problems/climbing-stairs/
 * @param {number} n
 * @return {number}
 */
// 动态规划 -- 滚动数组的思想

/**
 * 
到0层：0种方案
到1层：1
到2层：2
到3层：3
到4层：5
到5层：8
.....
这样子不断递推，就是刚好符合斐波那契数的规律f(n)=f(n-1)+f(n-2),可以使用动态规划的算法

时间复杂度为 O(n),空间复杂度为O(1)
 *
 */

var climbStairs = function (n) {
  let p = 0, q = 0, r = 1;
  for (let i = 1; i <= n; ++i) {
    p = q;
    q = r;
    r = p + q;
  }
  return r;
};