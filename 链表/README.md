## 前言

链表是一种很重要的数据结构，这一章将做一次链表的总结：

首先一个算法的好与坏，时间复杂度和空间复杂度是一个挺重要的衡量指标。引用一下其他大佬总结的不错的文章来阐述一下复杂度的理解与计算：

[如何理解时间复杂度与空间复杂度](https://www.zhihu.com/question/21387264/answer/422323594)

[算法的时间和空间复杂度](https://zhuanlan.zhihu.com/p/50479555)

## 链表 Linked List

链表是一种线性表，但是不是按顺序表一样按顺序存储的，而是一种物理存储结构上非连续、非顺序的存储结构。它是由一系列结点组成，每一个结点分为数据域（用来存储当前元素的数值）和指针域（存储直接后继结点的地址）。

**特点：**

- 结点在存储器中的位置是任意的，即逻辑相邻的数据元素在物理上不一定相邻
- 访问时只能通过头指针进入链表，并通过每个结点的指针域依次向后顺序扫描其余结点，所以寻找第一个结点和最后一个结点所花费的时间是不同的

**优缺点：**

- 链式结构方便随时随地删除、插入数据，时间复杂度为 O(1)，但是寻找、读取数据的效率不如数组高，在随机访问数据中的时间复杂度为 O(m)(m 为访问到的数据在链表中的排列位置)

- 相比于数组，数组可以通过下标寻找、读取数据元素，时间复杂度为 O(1),但是删除、插入就没链表方便

**链表有很多不同的类型：**

- 单向链表

- 双向链表

- 循环链表

对于链表的使用，需要特别注意**头结点**：

头结点：是在链表的首元结点之前附设的一个结点。
头指针：是指向链表中第一个结点的指针。
首元结点：是指链表中存储的第一个数据元素的结点。

在链表中设置头结点有什么好处？

1、便于首元结点的处理
首元结点的地址保存在头结点的指针域中，所以在链表的第一个位置上的操作和其他位置一致，无须进行特殊处理

2、便于空表和非空表的统一处理
无论链表是否为空，头指针都是指向头结点的非空指针，因此空表和非空表的处理也就统一了。

### 单链表

![](../images/%E9%93%BE%E8%A1%A81.png)

**链表创建**

```js
// 单链表插入、删除、查找
class LinkedList {
  constructor(val) {
    val = val === undefined ? 'head' : val;
    this.head = new ListNode(val);
  }

  //找val值结点，没有找到就返回-1
  findByVal(val) {
    let current = this.head;
    while (current !== null && current.val !== val) {
      current = current.next;
    }
    return current ? current : -1;
  }

  // 插入结点， 在值为val后面插入
  insert(newVal, val) {
    let current = this.findByVal(val);
    if (current === -1) {
      return false;
    }
    let newNode = new ListNode(newVal);
    newNode.next = current.next;
    current.next = newNode;
  }

  // 获取值为nodeVal的前一个结点， 找不到为-1，参数为val
  // 适用于链表中无重复结点
  findNodePreByVal(nodeVal) {
    let current = this.head;
    while (current.next !== null && current.next.val !== nodeVal) {
      current = current.next;
    }
    return current !== null ? current : -1;
  }

  // 根据index查找当前结点，参数为index
  // 可以作为比较链表是否重复结点
  findByIndex(index) {
    let current = this.head,
      pos = 1;
    while (current.next !== null && pos !== index) {
      current = current.next;
      pos++;
    }
    return current && pos === index ? current : -1;
  }

  // 删除某一个结点，删除失败返回false
  remove(nodeVal) {
    if (nodeVal === 'head') return false;
    let needRemoveNode = this.findByVal(nodeVal);
    if (needRemove === -1) return false;
    let preNode = this.findNodePreByVal(nodeVal);
    preNode.next = needRemoveNode.next;
  }

  // 遍历结点
  disPlay() {
    let res = new Array();
    let current = this.head;
    while (current !== null) {
      res.push(current.val);
      current = current.next;
    }
    return res;
  }

  // 在链表末尾插入一个新结点
  push(nodeVal) {
    let current = this.head;
    let node = new ListNode(nodeVal);
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
  }

  // 在头部插入
  frontPush(nodeVal) {
    let newNode = new ListNode(nodeVal);
    this.insert(nodeVal, 'head');
  }
}
```

**链表类的使用**

```js
let demo = new LinkedList(); // LinkedList {head: ListNode}
// console.log((demo.disPlay()))
demo.push('1232');
demo.insert(123, 'head');
demo.push('last value');
demo.frontPush('start');
demo.remove('head');
// demo.remove('last value')
// console.log(demo.remove('head'))
// demo.push('2132')
// demo.insert('不存在的值', '插入失败') //return -1
console.log(demo.findByIndex(1));
console.log(demo.disPlay());
```

### 双链表

### 经典题目

![合并两个有序链表](https://leetcode-cn.com/problems/merge-two-sorted-lists/)

![删除链表节点](https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/)

![删除链表倒数第n个节点](https://leetcode.cn/problems/remove-nth-node-from-end-of-list/)

![两数之和](https://leetcode.cn/problems/add-two-numbers/)

![反向链表](https://leetcode.cn/problems/reverse-linked-list/)

![双指针求交点](https://leetcode-cn.com/problems/intersection-of-two-linked-lists-lcci)

![两两交换链表中的节点](https://leetcode.cn/problems/swap-nodes-in-pairs/)

**合并两个有序链表**

leetCode 链接(https://leetcode-cn.com/problems/merge-two-sorted-lists/)

题目要求：将两个有序链表合并成一个有序链表，并且返回新链表。

> 输入：l1 = [1,2,4], l2 = [1,3,4]

> 输出：[1,1,2,3,4,4]

1、递归思路：

(1)先判断链表是否有空的情况，如果其中一个为空，那么另外链表即为新链表；

(2)如果两个链表都是不为空，对两个链表的第一个值对比，如果遇到小的值就排列到新链表中，并且该链表的指针往后移动一位；使用递归方式不断重复这个过程，直到其中一个链表为空结束递归。

```js
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
```

时间复杂度和空间复杂度都是 O(m+n)(m,n 是链表的长度)。

2、迭代思路（非递归）

(1)比较两个链表的元素，将小的那个赋值给哨兵结点;

(2)然后原本这个指针指向链表的下一个元素，每次循环后，都将哨兵结点指向下一位；

(3)当链表出现 null 的时候，循环结束。

```js
var mergeTwoLists = function (l1, l2) {
  const newNode = new ListNode('head'); // 做题套路,头结点
  let temp = newNode; // 作为哨兵结点
  while (l1 !== null && l2 !== null) {
    // 循环结束的条件：非空
    if (l1.val < l2.val) {
      temp.next = l1;
      l1 = l1.next;
    } else {
      temp.next = l2;
      l2 = l2.next;
    }
    temp = temp.next; // 哨兵结点指向下一个元素
  }
  // 判断l1和l2是否为空，如果其中一个为空，另一个链表直接合并
  temp.next = l1 === null ? l2 : l1;
  return newNode.next;
};
```

时间复杂度：O(m+n)，空间复杂度：O(1)

**删除链表节点**

LeetCode 链接：https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/

题目给出链表和要删除的节点的值，要求返回删除节点后的链表

1、删除链表当然是画图最清晰啦！

![](../images/%E5%88%A0%E9%99%A4%E9%93%BE%E8%A1%A8%E5%9B%BE%E7%A4%BA.png)

2、思路：

(1)链表题目的套路，首先建立一个哨兵节点，让他在循环中不断地指向下一个节点；

(2)遍历链表， 若当前节点的下一个节点的值为要删除节点的值 val 时，则 curNode.next = curNode.next.next，然后结束循环；如果不相等的话，就 curNode = curNode.next 指向下一个节点，继续循环遍历

(3)如果当前元素的下一个为 null 时退出循环,即 curNode.next = null

```js
var deleteNode = function (head, val) {
  let newHead = new ListNode('-1');
  newHead.next = head;
  let curNode = newHead;
  while (curNode.next) {
    if (curNode.next.val === val) {
      curNode.next = curNode.next.next;
      break;
    }
    curNode = curNode.next;
  }
  return newHead.next;
};
```

3、时间复杂度 O(n)和空间复杂度为 O(1),n 为链表的长度

**删除链表倒数第 n 个节点**

LeetCode 链接：https://leetcode.cn/problems/remove-nth-node-from-end-of-list/

题目给出链表和 n，要求返回删除后的链表

这道题目与上题![删除链表节点](https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/)差不多，只要明白：**链表倒数第 n 个节点 === 链表中（链表长度-n）个节点**，因此，这倒题目先遍历链表得到链表的长度，之后和上题思路一致。

时间和空间复杂度也一样。

```js
var removeNthFromEnd = function (head, n) {
  let newHead = new ListNode('-1');
  newHead.next = head;
  let curNode = newHead;
  let count = 0;
  // 先遍历链表得到链表长度count
  while (curNode.next) {
    count++;
    curNode = curNode.next;
  }
  curNode = newHead;
  let deleteCount = 0;
  while (curNode) {
    deleteCount++;
    if (deleteCount - 1 === count - n) {
      curNode.next = curNode.next.next;
      break;
    }
    curNode = curNode.next;
  }
  return newHead.next;
};
```

**两数之和**

leetCode 链接：https://leetcode.cn/problems/add-two-numbers/

题目要求两个链表的值相加得到的结果，然后逆序返回。

1、思路：

将 l1 和 l2 每个对应节点的值相加，如果其中一个链表的遍历结束了，那就用 0 补齐

```js
var addTwoNumbers = function (l1, l2) {
  let flag = 0, // 判断是否需要进位
    node = new ListNode('start'),
    temp = node, // temp临时存放新链表的值
    sum = 0;
  while (l1 || l2) {
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + flag; // 如果l1和l2链表其中一个链表结束了，就用0补齐
    temp.next = new ListNode(sum % 10); // 新链表的取值
    temp = temp.next; // 指向新链表的下一个节点
    flag = sum >= 10 ? 1 : 0;
    l1 && (l1 = l1.next); // l1不会非空就指向下一个节点
    l2 && (l2 = l2.next); // l2不会非空就指向下一个节点
  }
  flag && (temp.next = new ListNode(flag)); // 如果有进位，新链表指向下一个节点
  return node.next;
};
```

2、时间复杂度为 O(max(m+n))，空间复杂度为 O(1)[n,m 是链表 l1 和 l2 的长度]
