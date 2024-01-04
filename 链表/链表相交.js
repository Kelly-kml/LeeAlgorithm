/*
 * @Description: 链表相交：https://leetcode.cn/problems/intersection-of-two-linked-lists-lcci/
 * @author: kelly
 * @Date: 2024-01-04 12:15:08
 * @LastEditTime: 2024-01-04 12:32:12
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 使用哈希表 Set
var getIntersectionNode = function (headA, headB) {
  // 创建一个哈希表，将headA存储进表中
  const visited = new Set();
  let temp = headA;
  while (temp !== null) {
    visited.add(temp);
    temp = temp.next;
  }
  temp = headB;
  // 在headB 不空的情况下将哈希表与headB的节点比对，如果有存在即为交点，并且返回，返回return null
  while (temp !== null) {
    if (visited.has(temp)) {
      return temp;
    }
    temp = temp.next;
  }
  return null;
};


// 使用双指针
var getIntersectionNode = function (headA, headB) {
  let pA = headA, pB = headB;
  // 两个链表得不为空才有相交的可能性
  if (headA === null || headB === null) {
    return null;
  }
  while (pA !== pB) {
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }
  return pA;
};