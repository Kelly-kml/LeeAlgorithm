/**
 * @description https://leetcode.cn/problems/remove-element/
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

/**
 * 此题是为了移除数组中出现指定的元素，并且返回移除后的新数组的长度和新数组
 * 
 * 解题思路：采用最简单的方式，遍历整个数组，将val与数组中的每一个元素比较，
 * 如果不相等，将该值存放到nums[left]中，并且left+1；继续下一次循环。
 * 如果相等的时候left的值不改变，即说明该值要移除，继续下一次的循环。
 * 
 * 需要注意的是：因为这道题移除元素是保证新数组个数只能等于或者小于原来的数组的，因此，这样子可以先新数组存放在原来遍历过的元素位置，不需要暂用新的空间
 * 因此，空间复杂度是O(1);
 * 
 * 遍历整个数组，因此时间复杂度就是数组的长度，O(n)
 */
var removeElement = function (nums, val) {
  const n = nums.length
  let left = 0
  for (let right = 0; right < n; right++) {
    if (nums[right] !== val) {
      nums[left] = nums[right]//与目标删除值不相同，就将其前移，覆盖前面的空位
      left++//覆盖后，向后移动一位
    }
  }
  return left
}


/**
 * 方法二：采用双指针设置快慢指针来解决
 * 
 * 双指针的基本思路：（利用快慢指针代替暴力解法一层 for 循环，降低了实践复杂度）
 * 
 * 设置快慢指针，快指针是用来寻找新数组的元素的，慢指针是用来存放新指针的元素的，因此，就是快指针找到了元素就赋值给慢指针
 */
var removeElement = function (nums, val) {
  let left = 0, right = nums.length
  while (left < right) {
    if (nums[left] === val) {
      nums[left] = nums[right - 1]
      right--
    } else {
      left++
    }
  }
  return left
}