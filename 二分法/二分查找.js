/**
 * @description https://leetcode.cn/problems/binary-search/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0, right = nums.length - 1
  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left
    const num = nums[mid]
    if (num === target) {
      return mid
    } else if (num > target) {
      right = mid - 1// target处于有序列表的右半部分
    } else {
      left = mid + 1// target处于有序列表的左半部分
    }
  }
  return -1// 列表中找不到target就返回-1
}