/**
 * @description 两个数组的交集： https://leetcode.cn/problems/intersection-of-two-arrays/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  // 先保证nums1的长度大于等于nums2 ,方便哈希表的比对
  if (nums1.length < nums2.length) {
    const temp = nums1;
    nums1 = nums2;
    nums2 = temp;
  }
  // nums存储于哈希表中
  const nums1Set = new Set(nums1);

  // 建立哈希表存储交集的部分
  const set1 = new Set();
  for (let i = nums2.length - 1; i >= 0; i--) {
    // if(nums1Set.has(nums2[i])){
    //     set1.add(nums2[i]);
    // }
    nums1Set.has(nums2[i]) && set1.add(nums2[i]);// 与if表达的意思是一样的
  }
  return Array.from(set1);
};