二叉树作为一种数据结构还是非常重要的，接下来我结合自己理解来总结一下二叉树的基本要点：

（1）基本概念
（2）基本术语
（3）

## 树的基本要点

### 1、基本概念

根据维基百科给出的定义：树状图是一种非线性存储（存储的就是具有“一对多”关系的数据元素的集合）的数据结构，它是由 n（n>=1）个有限结点组成一个具有层次关系的集合。把它叫做“树”是因为它看起来像一棵倒挂的树，也就是说它是根朝上，而叶朝下的。

它具有的特点：

- 每个节点有 0 个或多个子节点；
- 没有父节点的节点就是根节点；
- 每个非根节点有且只有一个父节点；
- 除了根节点外，每个子节点可以分为多个不相交叉的子树；
- 树里面没有环路(cycle)。

### 2、相关术语

> **节点的度**：一个节点含有的子树的个数称为该节点的度

> **树的度**：一棵树中，最大的节点度称为树的度

> **叶节点或者终端节点**:度为 0 的节点

> **节点深度**：对任意节点 x，x 节点的深度表示为根节点到 x 节点的路径长度。所以根节点深度为 0，第二层节点深度为 1，以此类推
> 节点高度：对任意节点 x，叶子节点到 x 节点的路径长度就是节点 x 的高度

> **树的深度**：一棵树中节点的最大深度就是树的深度，也称为高度

> **父节点**：若一个节点含有子节点，则这个节点称为其子节点的父节点

> **子节点**：一个节点含有的子树的根节点称为该节点的子节点
> 节点的层次：从根节点开始，根节点为第一层，根的子节点为第二层，
> 以此类推

> **兄弟节点**：拥有共同父节点的节点互称为兄弟节点
> 度：节点的子树数目就是节点的度

> **叶子节点**：度为零的节点就是叶子节点

> **祖先**：对任意节点 x，从根节点到节点 x 的所有节点都是 x 的祖先（节点 x 也是自己的祖先）

> **后代**：对任意节点 x，从节点 x 到叶子节点的所有节点都是 x 的后代（节点 x 也是自己的后代）

> **森林**：m 颗互不相交的树构成的集合就是森林

### 3、树的种类

![](../images/%E6%A0%91%E7%9A%84%E5%88%86%E7%B1%BB.png)

- 无序树：树中任意节点的子节点之间没有顺序关系，这种树称为无序树，也称为自由树。

- 有序树：树中任意节点的子节点之间有顺序关系，这种树称为有序树。

- 二叉树：每个节点最多含有两个子树的树称为二叉树。

- 完全二叉树：对于一棵二叉树，假设其深度为 d（d>1）。除了第 d 层外，其它各层的节点数目均已达最大值，且第 d 层所有节点从左向右连续地紧密排列，这样的二叉树被称为完全二叉树。

- 满二叉树：所有叶节点都在最底层的完全二叉树。

- 平衡二叉树（AVL 树）：当且仅当任何节点的两棵子树的高度差不大于 1 的二叉树；

- 排序二叉树(二叉查找树（英语：Binary Search Tree))：也称二叉搜索树、有序二叉树；

- 霍夫曼树：带权路径最短的二叉树称为哈夫曼树或最优二叉树；

- B 树：一种对读写操作进行优化的自平衡的二叉查找树，能够保持数据有序，拥有多于两个子树。

二叉树（binary tree）是一种特殊的树状结构（英语：Tree structure）。

---

## 二叉树

二叉树是树结构中一个非常重要的概念，接下来我们主要来总结一下二叉树：

### 1、概念

**二叉树（binary tree）**是指**树中节点的度不大于 2 的有序树**，它是一种最简单且最重要的树。 二叉树的递归定义为：二叉树是一棵空树，或者是一棵由一个根节点和两棵互不相交的，分别称作根的左子树和右子树组成的非空树；左子树和右子树又同样都是二叉树 。

### 2、性质

二叉树是一棵有根树，并且每个节点最多有 2 个子节点，成为左右子树。非空的二叉树，若树叶总数为 n0，分支度为 2 的总数为 n2，则 **n0 = n2 + 1**

假设总节点数为 n，树的度为 e，那么：
n = n0 + n1 + n2, n = e + 1, e = n1 + 2n2
--> n0 = n2 + 1

### 3、特殊类型

![完全二叉树与满二叉树](../images/FullBT_CompleteBT.jpg)

**完全二叉树**

在一颗二元树中，若除最后一层外的其馀层都是满的，并且最后一层要么是满的，要么在右边缺少连续若干节点，则此二元树为完全二元树（Complete Binary Tree）。具有 n 个节点的完全二元树的深度为
log2n+1。深度为 k 的完全二元树，至少有 2^(k-1) 个节点，至多有 2^k-1 个节点。

**满二叉树**

一棵深度为 k，且有 2^k-1 个节点的二元树，称为完美二元树（Perfect Binary Tree）。这种树的特点是每一层上的节点数都是最大节点数。

性质：

对于一棵深度为 k 的完美二叉树：

- 共有 2^k-1 个节点

- 节点个数一定为奇数

- 第 i 层有 2^(i-1) 个节点

- 有 2^(k-1)个叶子

### 二叉树的遍历

对于二叉树的遍历常见的遍历方式有三种：

- 前序遍历（根左右）

- 中序遍历（左根右）

- 后序遍历（左右根）

对于任何一种方式，都要掌握递归和非递归两种方式

#### 前序遍历

![前序遍历算法练习](https://leetcode.cn/problems/binary-tree-preorder-traversal/)

**递归方法**

```js
let preorderTraversal = (root, arr = []) => {
  if (root) {
    arr.push(root.val);
    preorderTraversal(root.left, arr);
    preorderTraversal(root.right, arr);
  }
  return arr;
};
```

**非递归**

```js
var preorderTraversal = (root, arr = []) => {
  const stack = [],
    res = [];
  let current = root;
  while (current || stack.length > 0) {
    while (current) {
      res.push(current.val);
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    current = current.right;
  }
  return res;
};
```

#### 中序遍历

![中序遍历练习](https://leetcode-cn.com/problems/binary-tree-inorder-traversal)

**递归**

```js
var inorderTraversal = function (root, arr = []) {
  if (root) {
    inorderTraversal(root.left, arr);
    arr.push(root.val);
    inorderTraversal(root.right, arr);
  }
  return arr;
};
```

**非递归**

```js
var inorderTraversal = function (root, arr = []) {
  const stack = [],
    res = [];
  let current = root;
  while (current || stack.length > 0) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    res.push(current.val);
    current = current.right;
  }
  return res;
};
```

#### 后序遍历

![后序遍历练习](https://leetcode-cn.com/problems/binary-tree-postorder-traversal)

**递归**

```js
var postorderTraversal = function (root, arr = []) {
  if (root) {
    postorderTraversal(root.left, arr);
    postorderTraversal(root.right, arr);
    arr.push(root.val);
  }
  return arr;
};
```

**非递归**

```js
var postorderTraversal = function (root) {
  const stack = [],
    res = [];
  let current = root,
    last = null;
  while (current || stack.length > 0) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack[stack.length - 1];
    if (!current.right || current.right == last) {
      current = stack.pop();
      res.push(current.val);
      last = current;
      current = null;
    } else {
      current = current.right;
    }
  }
  return res;
};
```
