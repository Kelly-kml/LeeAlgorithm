/*
 * @Description: 快慢双指针法 
 * @author: kelly
 * @解题思路：
  1. 设置快慢指针，快指针fast先提前走 n+1 步，此时快慢指针就是相差n+1步，

  +1是为了方便后续的节点删除，我们是先获取前一个节点，再删除 cur.next，达到删除的目的

  2. 快慢指针一起遍历链表，当fast指向null时，slow指针就指向链表的第N+1个节点

  3. 执行slow 指向slow.next，即可实现目标节点的删除。 
 * @Date: 2024-01-03 17:14:58
 * @LastEditTime: 2024-01-03 17:19:09
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 定义fast指针和slow指针，初始值为虚拟头结点
  const dummyHead = new ListNode(0, head);
  let slow = fast = dummyHead;

  // fast首先走n + 1步 
  while (n--) {
    fast = fast.next;
  }

  // fast和slow同时移动，直到fast指向末尾
  while (fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  // 删除slow指向的下一个节点
  slow.next = slow.next.next;
  return dummyHead.next;
}
