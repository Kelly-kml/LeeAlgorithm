/**
 * @description 归并排序
 * @param {*} left 
 * @param {*} right 
 * @returns 
 */
const merge = (left, right) => {
  // 合并数组

  let result = []
  // 使用shift()方法,删除第一个元素,并且返回该值
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  while (left.length) {
    result.push(left.shift())
  }

  while (right.length) {
    result.push(right.shift())
  }
  return result
}

let mergeSort = function (arr) {
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  // 拆分数组
  let left = arr.slice(0, mid),
    right = arr.slice(mid)
  let mergeLeftArray = mergeSort(left),
    mergeRightArray = mergeSort(right)
  return merge(mergeLeftArray, mergeRightArray)
}