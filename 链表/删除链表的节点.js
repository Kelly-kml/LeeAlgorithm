/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @description https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  let newHead = new ListNode('-1') // 建立一个哨兵节点
  newHead.next = head // 让它指向
  let curNode = newHead
  // 遍历链表，如果当前元素的下一个为null时退出循环
  while (curNode.next) {
    if (curNode.next.val === val) {// 若当前节点的下一个节点的值为val，则curNode.next = curNode.next.next，然后结束循环；如果不相等的话，就curNode = curNode.next指向下一个节点，继续循环遍历
      curNode.next = curNode.next.next
      break
    }
    curNode = curNode.next
  }
  return newHead.next
}