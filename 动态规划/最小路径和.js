/**
 * @description https://leetcode.cn/problems/minimum-path-sum/
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  // 做一个矩阵的判空处理
  if (grid === null || grid.length === 0 || grid[0].length === 0) {
    return 0
  }
  const rows = grid.length//行
  const columns = grid[0].length//列

  //创建dp数组
  const dp = Array.from(new Array(rows), () => new Array(columns).fill(1))

  // 到达第一个点的路径和为grid[0][0]值本身
  dp[0][0] = grid[0][0]

  // 求每一列第一个点的最短路径和
  for (let i = 1; i < rows; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0]
  }

  // 求每一行第一个点的最短路径和
  for (let j = 1; j < columns; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j]
  }

  // 从grid[1][1]开始计算每一个点的最短路径和，例如计算grid[1][1]该点的最短路径和，仅需比较dp[0][1]
  // 比较两者大小，谁最小取谁的值
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < columns; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
    }
  }
  return dp[rows - 1][columns - 1]
}