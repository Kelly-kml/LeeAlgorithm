// 实现快速排序
// nlg(n)
// 基本思想：
// 1、通过一趟排序将待排序记录分隔为独立的两部分
// 2、其中一部分记录的关键字均比另一个部分的关键字小，则可分别对这两部分记录继续排序，以达到整个序列有序
const quickSort = (arr) => {
  if (arr.length < 2) return arr
  const midIndex = arr.length >> 1,
    midValue = arr.splice(midIndex, 1)[0]
  const left = [], right = []
  for (let i = 0; i < arr; i++) {
    if (midIndex < arr[i]) {
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }
  return quickSort(left).concat([midValue], quickSort(right))
}