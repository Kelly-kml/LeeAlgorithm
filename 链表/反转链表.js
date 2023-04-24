/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @description https://leetcode.cn/problems/reverse-linked-list/
 * @param {ListNode} head
 * @return {ListNode}
 */

// 迭代算法
// 迭代算法就是将单链表的指针指向反转一下就可以了
// 特别注意：curr = next只能放在循环的最后一步，不然导致curr的值发生改变，那么新链表的prev和curr.next的值就不对了 
// 时间复杂度是O(n),n为链表长度,和空间复杂度为O(1)
var reverseList = function (head) {
  let prev = null
  let curr = head
  while (curr) {
    const next = curr.next//先将curr.next暂存起来
    curr.next = prev// 再将新链表的curr.next指向原本的prev(方向转变)
    prev = curr// 再将新链表的prev就等于原本的curr
    curr = next//最后新链表的curr就是暂存的next（curr.next)
  }
  return prev
}



// 递归算法
// 个人理解：将单链表先看成是一个不完全环形链表（里面有的节点方向一致，有点不一致），head.next.next（即链表的最后一个节点） 指向原本的head，等到全部的节点都反转完毕（head为null）结束迭代
// 注意点：一定最后要将head.next指向null,不然很可能会变成一个环形链表
// 时间复杂度和空间复杂度都是O(n),n为链表长度
var reverseList = function (head) {
  if (head == null || head.next == null) {
    return head
  }
  const newHead = reverseList(head.next)
  head.next.next = head
  head.next = null
  return newHead
}









