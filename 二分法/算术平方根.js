/**
 * @description https://leetcode.cn/problems/sqrtx/
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x < 2) {
    return x
  }
  let left = 1, right = x >> 1, mid = 1
  while (left <= right) {
    mid = (left + right) >> 1
    if (mid * mid < x) {
      left = mid + 1
    } else if (mid * mid > x) {
      right = mid - 1
    } else {
      return mid
    }
  }
  return right
}