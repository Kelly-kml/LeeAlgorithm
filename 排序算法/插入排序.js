/**
 * @description 插入排序
 * @param {*} arr 
 * @returns 
 */
let insertionSort = function (arr) {
  let len = arr.length

  for (let i = 0; i < len; i++) {
    let preIndex = i - 1,
      cur = arr[i]
    while (preIndex >= 0 && arr[preIndex] > cur) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex + 1] = cur
  }
  return arr
}