/**
 * @description 冒泡排序
 * @param {*} arr 
 * @param {*} flag 0：升序 1：降序
 * @returns 冒泡排序后的数组
 */
// 最外层循环控制的内容是循环的次数
// 每一次比较的 内容都是相邻两者之间的大小关系
let BubbleSort = function (arr, flag = 0) {
  let len = arr.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return flag ? arr.reverse() : arr
}
let arr = [2, 4, 5, 6, 1, 9, 3]
console.log(BubbleSort(arr, 1))