/*
 * @Description: 
 * @author: kelly
 * @Date: 2023-05-05 23:41:57
 * @LastEditTime: 2023-09-07 13:11:52
 */
/**
 * @description https://leetcode.cn/problems/binary-search/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 二分查找-左闭右闭
var search = function (nums, target) {
  let left = 0, right = nums.length - 1
  while (left <= right) {// 左闭右闭[left, right]
    const mid = Math.floor((right - left) / 2) + left
    const num = nums[mid]
    if (num > target) {
      right = mid - 1// target处于有序列表的右半部分
    } else if (num < target) {
      left = mid + 1// target处于有序列表的左半部分
    } else {
      return mid;
    }
  }
  return -1// 列表中找不到target就返回-1
}

// 二分查找-左闭右开
var search = function (nums, target) {
  let left = 0, right = nums.length - 1;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);// 防止数字溢出
    let num = nums[mid];
    if (num > target) {// target处于左半区间
      right = mid;
    }
    else if (num < target) {// target处于右半区间
      left = mid + 1;
    }
    else return mid;
  }
  return -1;
};

