/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let flag = 0, // 判断是否需要进位
    node = new ListNode('start'),
    temp = node,// temp临时存放新链表的值
    sum = 0
  while (l1 || l2) {
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + flag// 如果l1和l2链表其中一个链表结束了，就用0补齐
    temp.next = new ListNode(sum % 10) // 新链表的取值
    temp = temp.next // 指向新链表的下一个节点
    flag = sum >= 10 ? 1 : 0
    l1 && (l1 = l1.next)// l1不会非空就指向下一个节点
    l2 && (l2 = l2.next)// l2不会非空就指向下一个节点
  }
  flag && (temp.next = new ListNode(flag))// 如果有进位，新链表指向下一个节点
  return node.next
}