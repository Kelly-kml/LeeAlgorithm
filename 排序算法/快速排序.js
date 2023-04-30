/**
 * @description 快速排序
 * @param {*} arr 
 * @returns 
 */
let quickSort = function (arr) {
  if (arr.length <= 1) {
    return arr
  }
  let index = Math.floor(arr.length / 2)
  let pivot = arr.splice(index, 1)[0], left = [], right = []
  for (let i = 0; i < arr.length; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
}