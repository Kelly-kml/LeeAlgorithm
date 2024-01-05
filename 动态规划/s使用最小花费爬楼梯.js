/*
 * @Description: 使用最小花费爬楼梯： https://leetcode.cn/problems/min-cost-climbing-stairs/description/
 * @author: kelly
 * @Date: 2024-01-05 15:36:40
 * @LastEditTime: 2024-01-05 16:43:44
 */
/**
 * @param {number[]} cost
 * @return {number}
 */

/**
 * 使用动态规划的基础算法解决：
 * 由于可以选择从下标为0或者1开始爬，因此，达到第n层有两个方式，分别为：
 * 到达第n-1层，然后花费cost[i-1]再爬一层  或者 达到第 n-2 层，然后花费cost[i-2]再爬2层，因此，这两种选择一个最小值即为最小花费。
 * 
 * 由于这每爬一层都是与已爬过的楼梯数相关的，因此可以抽象为一个动态规划算法：
 * 创建一个n+1的数组dp[n+1],因为 cost[i] 是从楼梯第 i 个台阶向上爬需要支付的费用，爬到n层的花费即为 
 * min(dp[i-1]+cost[i-1], dp[i-2]+cost[i-2])
 */
var minCostClimbingStairs = function (cost) {
  const n = cost.length;
  const dp = new Array(n + 1);
  dp[0] = dp[1] = 0;
  for (let i = 2; i < n + 1; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);

  }
  return dp[n];
};
// 上面的这种方式，需要创建一个dp[n+1]的空间，因此时间复杂度和空间复杂度都是为O(n),我们可以进一步优化一下，降低空间复杂度


/**
 * 当i>=2时，我们会发现，dp只跟dp[i-1] 和 dp[i-2]有关,
 * 因此可以使用滚动数组的思想，将空间复杂度降低为O(1)
 */
var minCostClimbingStairs = function (cost) {
  const n = cost.length;
  let curr = prev = 0;
  for (let i = 2; i <= n; i++) {

    let next = Math.min(curr + cost[i - 1], prev + cost[i - 2]);// 求的是上一层的花费
    prev = curr;
    curr = next;
  }
  return curr;// 返回的是当前这一层的花费
};

