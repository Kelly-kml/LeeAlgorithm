/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @description https://leetcode.cn/problems/intersection-of-two-linked-lists-lcci/
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 双指针链表
// pA是headA指针，pB是headB指针，遍历两个链表，如果pA===null,则pA指向链表B，pA不为null,则继续指向pA.next;对于headB也是类似的思路
// 时间复杂度O(m+n)，空间复杂度O(1)
var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) {
    return null
  }
  let pA = headA, pB = headB
  while (pA !== pB) {
    pA = pA === null ? headB : pA.next
    pB = pB === null ? headA : pB.next
  }
  return pA
}

// 哈希集合表
// 思路：遍历headA链表，将访问过的节点存放到哈希集合表中，然后继续遍历headB，判断节点是否在哈希表中，如果存在就返回该节点即为交点，如果不存在则继续指向下一个节点
// 时间复杂度O(m + n),空间复杂度O(m),m是headA的长度，n是headB的长度
var getIntersectionNode = function (headA, headB) {
  const visited = new Set()
  let temp = headA
  while (temp !== null) {
    visited.add(temp)
    temp = temp.next
  }
  temp = headB
  while (temp !== null) {
    if (visited.has(temp)) {
      return temp
    }
    temp = temp.next
  }
  return null
}