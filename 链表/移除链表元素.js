/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @description https://leetcode.cn/problems/remove-linked-list-elements/
 * 
 *    对比 LeetCode237题：https://leetcode.cn/problems/delete-node-in-a-linked-list/
 * 并不知道单链表的头节点的情况下，删除链表中的元素
 * 
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
/**
 * 本题是知道链表中的头节点的情况下删除链表中的某个元素，这可以使用递归或者迭代来处理
 */
// 递归
var removeElements = function (head, val) {
  if (head === null) {
    return head
  }
  head.next = removeElements(head.next, val)
  return head.val === val ? head.next : head
}

// 迭代
var removeElements = function (head, val) {
  const dummyHead = new ListNode(0)
  dummyHead.next = head
  let temp = dummyHead
  while (temp.next !== null) {
    if (temp.next.val == val) {
      temp.next = temp.next.next
    } else {
      temp = temp.next
    }
  }
  return dummyHead.next
}