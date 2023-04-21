/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @description https://leetcode.cn/problems/remove-nth-node-from-end-of-list/
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// 链表倒数第n个节点 === 链表中（链表长度-n）个节点
var removeNthFromEnd = function (head, n) {
  let newHead = new ListNode('-1')
  newHead.next = head
  let curNode = newHead
  let count = 0
  // 先遍历链表得到链表长度count
  while (curNode.next) {
    count++
    curNode = curNode.next
  }
  curNode = newHead
  let deleteCount = 0
  while (curNode) {
    deleteCount++
    if (deleteCount - 1 === count - n) {
      curNode.next = curNode.next.next
      break
    }
    curNode = curNode.next
  }
  return newHead.next
}