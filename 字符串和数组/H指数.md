## [H 指数](https://leetcode.cn/problems/h-index/description/)

H 指数的概念：h 代表“高引用次数” ，一名科研人员的 h 指数 是指他（她）至少发表了 h 篇论文，并且 至少 有 h 篇论文被引用次数大于等于 h 。如果 h 有多种可能的值，h 指数 是其中最大的那个。

输入：citations = [3,0,6,1,5]

输出：3

解释：给定数组表示研究者总共有 5 篇论文，每篇论文相应的被引用了 3, 0, 6, 1, 5 次。

由于研究者有 3 篇论文每篇 至少 被引用了 3 次，其余两篇论文每篇被引用 不多于 3 次，所以她的 h 指数是 3。

### 1. 根据 H 指数的定义直接解题：

首先先给数组排序，然后根据定义，如果满足 (citationsSort.length - i ) <= citationsSort[i] 该条件，那么 citationsSort.length - i 就是 H 指数，即为所求。

```js
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  const citationsSort = citations.sort((a, b) => a - b);
  const len = citationsSort.length;
  for (let i = 0; i < len; i++) {
    if (len - i <= citationsSort[i]) {
      return len - i;
    }
  }
  return 0;
};
```

**时间复杂度：O(nlog⁡n)**

其中 n 为数组 citations 的长度。即为排序的时间复杂度。

**空间复杂度：O(nlog⁡n)**

其中 n 为数组 citations 的长度。即为排序的时间复杂度。

### 2. 二分查找法：

我们需要找到一个值 h，使得它满足 有 h 篇论文的引用次数至少为 h 。

其实此题可以转化为 求 h 的最大值，这样子就类似于这个题[二分查找](https://leetcode.cn/problems/binary-search/description/)

```js
var hIndex = function (citations) {
  let left = 0,
    right = citations.length;
  while (left < right) {
    let mid = Math.floor((left + right + 1) / 2);
    let h = 0;
    for (let v of citations) {
      if (v >= mid) {
        h++;
      }
    }

    if (h >= mid) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }
  return left;
};
```

**时间复杂度：O(nlogn)**

其中 n 为数组 citations 的长度。需要进行 logn 次二分搜索，每次二分搜索需要遍历数组 citations 一次。

**空间复杂度：O(1)**

只需要常数个变量来进行二分搜索。
