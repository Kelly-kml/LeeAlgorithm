一提到 DFS 和 BFS ，我们就需要先来重温一下图的基本概念。

## 图

### 图概念

借助[维基本科](<https://zh.wikipedia.org/wiki/%E5%9B%BE_(%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84)>)中对于图的定义来理解：

图（graph）是一种抽象数据类型，用于实现数学中图论的**无向图**和**有向图**的概念。

图的数据结构包含一个有限（可能是可变的）的集合作为**节点集合**，以及一个无序对（对应无向图）或者有序对（对应有向图）的集合作为边（有向图中也称为**弧**）的集合。节点可以是图结构的一部分，也可以是用整数下标或者引用表示的外部实体。

图的数据结构还可能包含和每条边相关联的数值，例如一个标号或一个数值（即**权重**）

### 图的常见数据结构

**邻接表**

节点存储为记录或对象，且为每个节点创建一个列表。这些列表可以按节点存储其余的信息；例如，若每条边也是一个对象，则将边存储到边起点的列表上，并将边的终点存储在边这个的对象本身。

**邻接矩阵**

一个二维矩阵，其中行与列分别表示边的起点和终点。顶点上的值存储在外部。矩阵中可以存储边的值。

**关联矩阵**

一个二维矩阵，行表示顶点，列表示边。矩阵中的数值用于标识顶点和边的关系（是起点、是终点、不在这条边上等）。

[复杂度比较](../images//%E5%9B%BE%E7%9A%84%E5%B8%B8%E8%A7%81%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.png)

## DFS & BFS

DFS 和 BFS 是图遍历的两种非常重要的方式，同时也可以用于树的遍历。对于遍历的方式，如果不太熟悉的话，不妨先看一下[知乎]文章的详解：
[搜索思想——DFS & BFS(基础篇)](https://zhuanlan.zhihu.com/p/24986203)

简单地来：

**DFS**(Deep First Search)从根节点出发，然后依次向下继续搜索，直到遇到叶子节点，此时就会向上回溯，继续向为访问过的点继续深度搜索。

**BFS**(Breath First Search)BFS 是从根节点开始，沿着树的宽度遍历树的节点，如果发现目标，则演算终止。

### [二叉树的最大深度](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)

题目要求：给定一个二叉树，找出其最大深度。

深度：根节点到最远叶节点的最长路径上的节点数。

**示例：**

给定二叉树 [3,9,20,null,null,15,7]

返回他的最大深度为 3

**递归思路**

- 深度优先遍历
- 每次分别递归左节点和右节点。然后比较两者，取最大值
- 特别注意：一定要记得加上原本没有算上的根节点（+1）

```js
var maxDepth = function (root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
```

**非递归思路**

- 广度优先遍历
- 每一个用一个数组 temp 存放上一层的所有节点，每一个层遍历结束，计数器 res +1
- 当 temp 为空时，也就是此时都是叶节点的情况，可以退出循环

```js
var maxDepth = function (root) {
  if (!root) return 0;
  let queue = [root],
    res = 0;
  while (queue.length) {
    let temp = [];
    for (let i = 0; i < queue.length; i++) {
      if (queue[i].left) {
        temp.push(queue[i].left);
      }
      if (queue[i].right) {
        temp.push(queue[i].right);
      }
    }
    res += 1;
    queue = temp;
  }
  return res;
};
```

### [二叉树的最小深度](https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/)

题目要求：给定一个二叉树，找出其最小深度。

深度：根节点到最近叶节点的最长路径上的节点数。

**示例 1：**

给定二叉树 [3,9,20,null,null,15,7]

返回他的最小深度为 2

**示例 2：**

给定二叉树 [3,null,4,null,7]

返回最小深度为 3

**递归思路**

- 先判断根节点是否为空，空的话就返回 0
- 如果左右子树都为空，则根节点也是叶子节点，最小深度为 1
- 如果当前节点的左节点为空，那么就遍历右节点，确定最小深度
- 如果当前节点的右节点为空，那么就遍历左节点，确定最小深度
- 遍历当前节点的左右节点，比较两者取最小值
- 特别注意上述的值一定要记得加上根节点（+1）

```javascript
var minDepth = function (root) {
  if (!root) return 0;
  if (root.left === null && root.right === null) {
    return 1;
  }
  if (!root.left) return minDepth(root.right) + 1;
  if (!root.right) return minDepth(root.left) + 1;
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};
```

**非递归思路**

- 判断根节点是否为空，空的话返回 0
- while 每循环一次，就是遍历一层，如果当前层出现左右节点都是为 null,当前节点对应的深度就是最小深度

```js
var minDepth = function (root) {
  if (!root) return 0;
  let queue = [root],
    res = 0;
  while (queue.length) {
    let temp = [];
    res += 1;
    // 遍历某一层
    for (let i = 0; i < queue.length; i++) {
      // 第一次遇到左右节点为空，就是叶节点
      if (queue[i].left === null && queue[i].right === null) return res;
      if (queue[i].left) {
        temp.push(queue[i].left);
      }
      if (queue[i].right) {
        temp.push(queue[i].right);
      }
    }
    queue = temp;
  }
  return res;
};
```

## 题目汇总

### DFS

- #### [二叉树的最大深度](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)

- #### [二叉树的最小深度](https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/)

- #### [朋友圈](https://leetcode-cn.com/problems/friend-circles/)

- #### [找到最终的安全状态](https://leetcode-cn.com/problems/find-eventual-safe-states/)

- #### [矩阵中的最长递增路径](https://leetcode-cn.com/problems/longest-increasing-path-in-a-matrix/)

- #### [扫雷游戏](https://leetcode-cn.com/problems/minesweeper/)

- #### [单词接龙](https://leetcode-cn.com/problems/word-ladder/)

### BFS

- #### [N 叉树的层序遍历](https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/)

- #### [二叉树的层序遍历](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)

- #### [最小高度树](https://leetcode-cn.com/problems/minimum-height-trees/)

- #### [扫雷游戏](https://leetcode-cn.com/problems/minesweeper/)
