/**
 * @description https://leetcode.cn/problems/next-greater-element-i/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const map = new Map()
  const stack = []
  for (let i = nums2.length - 1; i >= 0; --i) {
    const num = nums2[i]
    while (stack.length && num >= stack[stack.length - 1]) {
      stack.pop()
    }
    map.set(num, stack.length ? stack[stack.length - 1] : -1)
    stack.push(num)
  }
  const res = new Array(nums1.length).fill(0).map((_, i) => map.get(nums1[i]))
  return res
}