/**
 * @description 合并两个有序链表(https://leetcode-cn.com/problems/merge-two-sorted-lists/)
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 递归思路：
// (1)先判断链表是否有空的情况，如果其中一个为空，那么另外链表即为新链表
// (2)如果两个链表都是不为空，对两个链表的第一个值对比，如果遇到小的值就排列到新链表中，并且该链表的指针往后移动一位；使用递归方式不断重复这个过程，直到其中一个链表为空结束递归
// 时间复杂度和空间复杂度都是O(m+n)(m,n是链表的长度)
var mergeTwoLists = function (l1, l2) {
  if (l1 === null) {
    return l2
  } else if (l2 === null) {
    return l1
  } else if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
}


// 迭代思路（非递归）
// (1)设置头结点，并且将头节点作为哨兵结点
// (2)迭代过程：比较两个链表的元素，将小的那个赋值给哨兵结点，然后原本这个指针指向链表的下一个元素，每次循环后，都将哨兵结点指向下一位；当链表出现null的时候，循环结束。
// (3)时间复杂度：O(m+n)，空间复杂度：O(1)
var mergeTwoLists = function (l1, l2) {
  const newNode = new ListNode('head') // 做题套路,头结点
  let temp = newNode // 作为哨兵结点
  while (l1 !== null && l2 !== null) {// 循环结束的条件：非空
    if (l1.val < l2.val) {
      temp.next = l1
      l1 = l1.next
    } else {
      temp.next = l2
      l2 = l2.next
    }
    temp = temp.next// 哨兵结点指向下一个元素
  }
  // 判断l1和l2是否为空，如果其中一个为空，另一个链表直接合并
  temp.next = l1 === null ? l2 : l1
  return newNode.next
}