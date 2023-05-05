**二分查找算法**对于有序列表中数据的查找还是一个重要的部分，对半查找可以很大程度地降低算法的时间复杂度。

### 概念

二分查找（Binary Search）算法，也叫折半查找算法。二分查找的思想非常简单，有点类似分治的思想。二分查找针对的是一个有序的数据集合，每次都通过跟区间的中间元素对比，将待查找的区间缩小为之前的一半，直到找到要查找的元素，或者区间被缩小为 0。

### 动画实现

![二分查找算法](https://pic2.zhimg.com/v2-baa12de88d8c3c09198e53152e53a409_b.gif)

### 局限性

- 二分查找依赖数组结构

二分查找需要利用下标随机访问元素，如果我们想使用链表等其他数据结构则无法实现二分查找。

- 针对的是有序数据

二分查找需要的数据必须是有序的。如果数据没有序，我们需要先排序，排序的时间复杂度最低是 O(nlogn)。所以，如果我们针对的是一组静态的数据，没有频繁地插入、删除，我们可以进行一次排序，多次二分查找。这样排序的成本可被均摊，二分查找的边际成本就会比较低。

但是，如果我们的数据集合有频繁的插入和删除操作，要想用二分查找，要么每次插入、删除操作之后保证数据仍然有序，要么在每次二分查找之前都先进行排序。针对这种动态数据集合，无论哪种方法，维护有序的成本都是很高的。

所以，**二分查找只能用在插入、删除操作不频繁，一次排序多次查找的场景中。针对动态变化的数据集合，二分查找将不再适用**

- 数据量太小不适合二分查找，数据量太大也不适合二分查找

如果要处理的数据量很小，完全没有必要用二分查找，顺序遍历就足够了。

二分查找底层依赖的是数组，数组需要的是一段连续的存储空间，所以我们的数据比较大时，比如 1GB，这时候可能不太适合使用二分查找，因为我们的内存都是离散的，可能电脑没有这么多的内存。

### 代码实现

- 最简单的情况

数据必须是有序的，且不存在重复项。

```js
/**
 * 二分查找，最简单的情况
 * 数组必须有序，不存在重复
 * @param {array} arr 待排序数组
 * @param {number} target 目标数据
 * @return {number} midIndex 查找值对应的下标
 */
function BinarySearch(arr, target) {
  if (arr.length <= 1) return -1;
  // 低位下标
  let lowIndex = 0;
  // 高位下标
  let highIndex = arr.length - 1;

  while (lowIndex <= highIndex) {
    // 中间下标
    const midIndex = Math.floor((lowIndex + highIndex) / 2);
    if (target < arr[midIndex]) {
      highIndex = midIndex - 1;
    } else if (target > arr[midIndex]) {
      lowIndex = midIndex + 1;
    } else {
      // target === arr[midIndex]
      return midIndex;
    }
  }
  return -1;
}

// 下面为测试用
const arr = [1, 4, 5, 6, 7, 8, 10, 11, 23, 42, 44, 54, 56, 77, 102];
console.log(BinarySearch(arr, 44));
```

- 变体一：查找第一个值等于给定值的元素

有序数据集合中存在重复的数据。

```js
/**
 * 二分查找，查找第一个值等于给定值的元素
 * 数组必须有序，存在重复
 * @param {array} arr 待排序数组
 * @param {number} target 目标数据
 */
function BinarySearchFirst(arr, target) {
  if (arr.length <= 1) return -1;
  // 低位下标
  let lowIndex = 0;
  // 高位下标
  let highIndex = arr.length - 1;

  while (lowIndex <= highIndex) {
    // 中间下标
    const midIndex = Math.floor((lowIndex + highIndex) / 2);
    if (target < arr[midIndex]) {
      highIndex = midIndex - 1;
    } else if (target > arr[midIndex]) {
      lowIndex = midIndex + 1;
    } else {
      // 当 target 与 arr[midIndex] 相等的时候，如果 midIndex 为0或者前一个数比 target 小那么就找到了第一个等于给定值的元素，直接返回
      if (midIndex === 0 || arr[midIndex - 1] < target) return midIndex;
      // 否则高位下标为中间下标减1，继续查找
      highIndex = midIndex - 1;
    }
  }
  return -1;
}

// 下面为测试用
const arr = [1, 4, 5, 6, 7, 8, 11, 11, 11, 42, 44, 54, 56, 77, 102];
console.log(BinarySearchFirst(arr, 11));
```

- 变体二：查找最后一个值等于给定值的元素

有序数据集合中存在重复的数据。

```js
/**
 * 二分查找，查找最后一个值等于给定值的元素
 * 数组必须有序，存在重复
 * @param {array} arr 待排序数组
 * @param {number} target 目标数据
 */
function BinarySearchLast(arr, target) {
  if (arr.length <= 1) return -1;
  // 低位下标
  let lowIndex = 0;
  // 高位下标
  let highIndex = arr.length - 1;

  while (lowIndex <= highIndex) {
    // 中间下标
    const midIndex = Math.floor((lowIndex + highIndex) / 2);
    if (target < arr[midIndex]) {
      highIndex = midIndex - 1;
    } else if (target > arr[midIndex]) {
      lowIndex = midIndex + 1;
    } else {
      // 当 target 与 arr[midIndex] 相等的时候，如果 midIndex 为0或者后一个数不等于 target 那么就找到了最后一个等于给定值的元素，直接返回
      // 这里不能取a rr[midIndex + 1] > target 可能会存在边界问题
      if (midIndex === 0 || arr[midIndex + 1] !== target) return midIndex;
      // 否则低位下标为中间下标加1，继续查找
      lowIndex = midIndex + 1;
    }
  }
  return -1;
}

// 下面为测试用
const arr = [1, 4, 5, 6, 7, 8, 11, 11, 11, 42, 44, 54, 56, 77, 102];
console.log(BinarySearchLast(arr, 11));
```

- 变体三：查找第一个大于等于给定值的元素

有序数据集合中存在重复的数据。

```js
/**
 * 二分查找，查找第一个大于等于给定值的元素
 * 数组必须有序，存在重复
 * @param {array} arr 待排序数组
 * @param {number} target 目标数据
 */
function BinarySearchFirstBig(arr, target) {
  if (arr.length <= 1) return -1;
  // 低位下标
  let lowIndex = 0;
  // 高位下标
  let highIndex = arr.length - 1;

  while (lowIndex <= highIndex) {
    // 中间下标
    const midIndex = Math.floor((lowIndex + highIndex) / 2);
    if (arr[midIndex] >= target) {
      // 如果 midIndex 为0或者前一个数小于 target 那么找到第一个大于等于给定值的元素，直接返回
      if (midIndex === 0 || arr[midIndex - 1] < target) return midIndex;
      // 否则高位下标为中位下标减1
      highIndex = midIndex - 1;
    } else {
      lowIndex = midIndex + 1;
    }
  }
  return -1;
}

// 下面为测试用
const arr = [1, 4, 5, 6, 7, 8, 11, 11, 11, 42, 44, 54, 56, 77, 102];
console.log(BinarySearchFirstBig(arr, 10));
```

- 变体四：查找最后一个小于等于给定值的元素

有序数据集合中存在重复的数据。

```js
/**
 * 二分查找，查找最后一个小于等于给定值的元素
 * 数组必须有序，存在重复
 * @param {array} arr 待排序数组
 * @param {number} target 目标数据
 */
function BinarySearchLastSmall(arr, target) {
  if (arr.length <= 1) return -1;
  // 低位下标
  let lowIndex = 0;
  // 高位下标
  let highIndex = arr.length - 1;

  while (lowIndex <= highIndex) {
    // 中间下标
    const midIndex = Math.floor((lowIndex + highIndex) / 2);
    if (arr[midIndex] <= target) {
      // 如果 midIndex 最后一个或者后一个数大于 target 那么找到最后一个小于等于给定值的元素，直接返回
      if (midIndex === arr.length - 1 || arr[midIndex + 1] > target)
        return midIndex;
      // 否则低位下标为中位下标加1
      lowIndex = midIndex + 1;
    } else {
      highIndex = midIndex - 1;
    }
  }
  return -1;
}

// 下面为测试用
const arr = [1, 4, 5, 6, 7, 8, 11, 11, 11, 42, 44, 54, 56, 77, 102];
console.log(BinarySearchLastSmall(arr, 12));
```

### LeetCode 经典例题

- !(二分查找)[https://leetcode.cn/problems/binary-search/]

- !(x 的平方根)[https://leetcode.cn/problems/sqrtx/]
