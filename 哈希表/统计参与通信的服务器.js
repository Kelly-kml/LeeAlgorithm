/**
 * @description https://leetcode.cn/problems/count-servers-that-communicate/
 * @param {number[][]} grid
 * @return {number}
 */
/**
 * 解题思路：
 * （1）是一个矩阵，可以建立两个哈希表，分别为横坐标和纵坐标
 * （2）遍历整个矩阵，如果grid[i][j]==1，那么将grid[i][j+1]和grid[i+1][j]作为键值记录到哈希表中
 * 
 */
var countServers = function (grid) {
  const m = grid.length, n = grid[0].length//m为横坐标的长度，n为纵坐标的长度
  const rows = new Map()
  const cols = new Map()

  // 遍历整个矩阵，如果grid[i][j]==1，那么将grid[i][j+1]和grid[i+1][j]作为键值记录到哈希表中
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 1) {
        rows.set(i, (rows.get(i) || 0) + 1)
        cols.set(j, (cols.get(j) || 0) + 1)
      }
    }
  }

  // 如果grid[i][j] ==1 并且跟它同行相邻或者同列相邻的值也为1，那么说明这两个服务器是可以互通的，那么ans+1
  let ans = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 1 && ((cols.get(j) || 0) > 1 || (rows.get(i) || 0) > 1)) {
        ans++
      }
    }
  }
  return ans
}