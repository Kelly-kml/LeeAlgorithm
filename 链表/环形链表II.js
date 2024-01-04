/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @description  环形链表II：https://leetcode.cn/problems/linked-list-cycle-ii/
 * @param {ListNode} head
 * @return {ListNode}
 */
// 哈希表法： 建立一个哈希表存储访问过的head节点,遍历head,如果出现访问过的额节点，说明存在环
var detectCycle = function (head) {
  const visited = new Set();
  while (head !== null) {
    if (visited.has(head)) {
      return head;
    }
    visited.add(head);
    head = head.next;
  }
  return null;
};

// 双指针法： 使用两个指针，fast 与 slow。它们起始都位于链表的头部。随后，slow指针每次向后移动一个位置，而 fast 指针向后移动两个位置。如果链表中存在环，则 fast指针最终将再次与 slow指针在环中相遇
var detectCycle = function (head) {
  if (head === null) {
    return null;
  }
  let slow = head, fast = head;
  while (fast !== null) {
    slow = slow.next;
    if (fast.next !== null) {
      fast = fast.next.next;
    } else {
      return null;
    }
    if (fast === slow) {
      let ptr = head;
      while (ptr !== slow) {
        ptr = ptr.next;
        slow = slow.next;
      }
      return ptr;
    }
  }
  return null;
};
