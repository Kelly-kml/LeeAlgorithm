/**
 * @description https://leetcode.cn/problems/count-pairs-of-nodes/
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} queries
 * @return {number[]}
 */
/**
 * 哈希表 + 排序 + 二分查找
 * 
 * ⭐⭐⭐⭐⭐ 我好像不是特别懂？？？
 */
var countPairs = function (n, edges, queries) {

  // 哈希表记录所有情况的点对组
  const cnt = new Array(n).fill(0)
  const g = new Map()
  for (const [a, b] of edges) {
    ++cnt[a - 1]
    ++cnt[b - 1]
    const k = Math.min(a - 1, b - 1) * n + Math.max(a - 1, b - 1)
    g.set(k, (g.get(k) || 0) + 1)
  }

  // 将点对进行排序
  const s = cnt.slice().sort((a, b) => a - b)

  // 求符合cnt要求的点对组的搜索方法
  const search = (nums, x, l) => {
    let r = nums.length
    while (l < r) {
      const mid = (l + r) >> 1
      if (nums[mid] > x) {
        r = mid
      } else {
        l = mid + 1
      }
    }
    return l
  }

  // 遍历统计符合要求的点对数目
  const ans = []
  for (const t of queries) {
    let res = 0
    for (let j = 0; j < s.length; ++j) {
      const k = search(s, t - s[j], j + 1)
      res += n - k
    }
    for (const [k, v] of g) {
      const a = Math.floor(k / n)
      const b = k % n
      if (cnt[a] + cnt[b] > t && cnt[a] + cnt[b] - v <= t) {
        --res
      }
    }
    ans.push(res)
  }
  return ans
}