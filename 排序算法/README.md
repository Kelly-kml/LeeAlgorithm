这一次我们来整理一下排序算法：

- 冒泡排序
- 计数排序
- 快速排序
- 归并排序
- 插入排序
- 选择排序

引用维基百科总结，各大排序算法的异同点如下图：

[](../images/%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95.png)

## 冒泡排序

### 时间复杂度： O(n^2)

### 思路：

1. 比较相邻的元素，前者比后者大的话，两者交换位置。
2. 对每一对相邻元素做相同操作，从开始第一对到最后一对，这样子最后的元素就是最大元素。
3. 针对 n 个元素重复以上步骤，每次循环排除当前最后一个。
4. 重复步骤 1~3，直到排序完成。

### 动画

![冒泡排序]![冒泡排序](https://user-images.githubusercontent.com/34484322/89124183-9e90d280-d507-11ea-9f3b-b486f792aa2d.gif)

### 代码实现

```js
// 最外层循环控制的内容是循环的次数
// 每一次比较的 内容都是相邻两者之间的大小关系
let BubbleSort = function (arr, flag = 0) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return flag ? arr.reverse() : arr;
};
```

---

## 快速排序

基本思想：通过一趟排序将待排序记录分隔为独立的两部分，其中一部分记录的关键字均比另一部分的关键字小，则可分别对这两部分记录继续进行排序，以达到整个序列有序的目的。

### 时间复杂度：O(nlogn)

### 思路

1. 选择数组中间数作为基数，并从数组中取出此基数；
2. 准备两个数组容器，遍历数组，逐个与基数比对，较小的放左边容器，较大的放右边容器；
3. 递归处理两个容器的元素，并将处理后的数据与基数按大小合并成一个数组，返回。

### 动画

![快速排序](https://user-images.githubusercontent.com/34484322/89124218-e0ba1400-d507-11ea-87f1-d14ae3aadfb0.gif)

### 代码实现

```js
let quickSort = function (arr) {
  // 递归出口就是数组长度为1
  if (arr.length <= 1) {
    return arr;
  }
  // 获取中间值的索引，使用Math.floor向下取整
  let index = Math.floor(arr.length / 2);
  // 使用splice截取中间值，第一个参数为截取的索引，第二个参数为截取的长度
  // 这里如果使用pivot=arr[index]，会陷入无限递归，导致超出最大调用堆栈大小的报错
  // splice会影响原数组
  let pivot = arr.splice(index, 1)[0],
    left = [],
    right = [];
  for (let i = 0; i < arr.length; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
};
```

---

## 归并排序

将两个有序数列合并成一个有序数列，我们称之为“归并”

基本思想与过程：先递归的分解数列，再合并数列（分治思想的典型应用）

### 时间复杂度: O(nlog(n))

### 思路

1. 将一个数组拆成 A、B 两个小组，两个小组继续拆，直到每个小组只有一个元素为止。
2. 按照拆分过程逐步合并小组，由于各小组初始只有一个元素，可以看做小组内部是有序的，合并小组可以被看做是合并两个有序数组的过程。
3. 对左右两个小数列重复第二步，直至各区间只有 1 个数。

### 动画

![归并排序](https://camo.githubusercontent.com/4087941af1ad827c4878739509716df32168e1fb/68747470733a2f2f706963342e7a68696d672e636f6d2f76322d63646461336631316336656662633031353737663563323961393036363737325f622e77656270)

### 代码实现

```js
const merge = (left, right) => {
  // 合并数组

  let result = [];
  // 使用shift()方法偷个懒,删除第一个元素,并且返回该值
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    result.push(left.shift());
  }

  while (right.length) {
    result.push(right.shift());
  }
  return result;
};

let mergeSort = function (arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  // 拆分数组
  let left = arr.slice(0, mid),
    right = arr.slice(mid);
  let mergeLeftArray = mergeSort(left),
    mergeRightArray = mergeSort(right);
  return merge(mergeLeftArray, mergeRightArray);
};
```

---

## 插入排序

顾名思义：通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。

### 时间复杂度: O(n^2)

### 思路

1. 从第一个元素开始，该元素可以认为已经被排序；
2. 取出下一个元素，在已经排序的元素序列中从后向前扫描；
3. 如果该元素（已排序）大于新元素，将该元素移到下一位置；
4. 重复步骤 3，直到找到已排序的元素小于或者等于新元素的位置；
5. 重复步骤 2~5。

### 动画

![插入排序](https://user-images.githubusercontent.com/34484322/89124203-c2541880-d507-11ea-9859-e964f5463a86.gif)

### 代码实现

```js
let insertionSort = function (arr) {
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    let preIndex = i - 1,
      cur = arr[i];
    while (preIndex >= 0 && arr[preIndex] > cur) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = cur;
  }
  return arr;
};
```

---

## 选择排序

思路：每一次从待排序的数组元素中选择最大(最小)的一个元素作为首元素,直到排完为止

### 时间复杂度 O(n^2)

### 思路

1. 有 n 个数,需要排序 n-1 次
2. 第一次选择最小值,放在第一位
3. 第二次选择最小值,放在第二位
4. …..重复该过程
5. 第 n-1 次选择最小值,放在第 n-1 位

### 动画

![选择排序](https://user-images.githubusercontent.com/34484322/89124365-0398f800-d509-11ea-9573-6a24820cfd81.gif)

### 代码实现

```js
let selectSort = function (arr, flag = 0) {
  let len = arr.length,
    temp = 0;

  // 一共需要排序len-1次
  for (let i = 0; i < len - 1; i++) {
    temp = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[temp]) temp = j;
    }
    // 每一趟保证第i位为最小值
    if (temp !== i) {
      [arr[i], arr[temp]] = [arr[temp], arr[i]];
    }
  }

  return flag ? arr.reverse() : arr;
};
```

---

## 计数排序

从名称上就知道，它的思想：就是把数组元素作为数组的下标，然后用一个临时数组统计该元素出现的次数。

数组的数据必须是整数，而且最大最小值相差的值不要过大，对于数据是负数的话，我实现的方案对此有优化。

### 时间复杂度：O(n+k)

n:数组的长度；k:又出现次数的个数

### 思路

1. 计算出差值 d,最小值小于 0,加上本身 add

2. 创建统计数组并统计对应元素个数

3. 统计数组做变形，后面的元素等于前面的元素之和,也就是排名数组

4. 遍历原始数组,从统计数组中找到正确位置,输出到结果数组

### 动画

![计数排序](https://user-images.githubusercontent.com/34484322/89124171-815c0400-d507-11ea-9b77-e45ea157a96d.gif)

### 代码实现

```js
// 计数排序
let countingSort = function (arr, flag = 0) {
  let min = arr[0],
    max = arr[0],
    len = arr.length;
  // 求最大最小值
  for (let i = 0; i < len; i++) {
    max = Math.max(arr[i], max);
    min = Math.min(arr[i], min);
  }
  // 1.计算出差值d,最小值小于0,加上本身add

  let d = max - min,
    add = min < 0 ? -min : 0;
  //2.创建统计数组并统计对应元素个数
  let countArray = new Array(d + 1 + add).fill(0);
  for (let i = 0; i < len; i++) {
    let demp = arr[i] - min + add;
    countArray[demp] += 1;
  }

  //3.统计数组做变形，后面的元素等于前面的元素之和,也就是排名数组
  let sum = 0;

  // 这里需要遍历的是countArray数组长度
  for (let i = 0; i < d + 1 + add; i++) {
    sum += countArray[i];
    countArray[i] = sum;
  }
  let res = new Array(len);
  //4.遍历原始数组,从统计数组中找到正确位置,输出到结果数组
  for (let i = 0; i < len; i++) {
    let demp = arr[i] - min + add;
    res[countArray[demp] - 1] = arr[i];
    countArray[demp]--;
  }
  return flag ? res.reverse() : res;
};
```
