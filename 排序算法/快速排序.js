/**
 * @description 快速排序
 * @param {*} arr 
 * @returns 
 */

// 快速排序是冒泡排序的一种优化，也是分治算法的一种应用
let quickSort = function (arr) {
  if (arr.length <= 1) {
    return arr
  }
  // 取得数组的最中间值的下标
  let index = Math.floor(arr.length / 2)
  // 随机选择基准数，一般是第一个、最后一个、中间值，本题采用中间值作为基准
  let pivot = arr.splice(index, 1)[0], left = [], right = []
  // 将大于基准数的放右边数组，小于基准值的放左边数组
  // 不断地递归上面的过程：取基准数，分左右区间，知道区间的长度为1，结束该子区间的递归
  for (let i = 0; i < arr.length; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
}

// 以上这种方式需要产生新的空数组left和right，空间复杂度为O(n)

// 这里可以使用快慢指针的方式来降低空间复杂度
function quickSort (arr) {
  // arr 数组，left 左指针，right 右指针
  function sort (arr, left, right) {
    if (arr.length == 0) {
      return []
    }

    // 获取主元，并划分
    var index = partition(arr, left, right)

    // 左侧重新划分，递归调用
    if (left < index - 1) {
      sort(arr, left, index - 1)
    }
    // 右侧重新划分，递归调用
    if (right > index) {
      sort(arr, index, right)
    }
  }

  //划分过程，取一个数据中间值，使左边的值都小于它，右边的值都大于它
  function partition (arr, left, right) {
    // 取中间值
    var pivot = arr[Math.floor((left + right) / 2)]

    while (left <= right) {
      // 循环找到左边大于pivot的值的索引
      while (arr[left] < pivot) {
        left++
      }
      // 循环找到右边小于pivot的值的索引
      while (arr[right] > pivot) {
        right--
      }
      // 交换位置，左指针右移，右指针左移
      if (left <= right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++
        right--
      }
    }
    // 
    return left
  }

  // 调用
  sort(arr, 0, arr.length - 1)
  return arr
}