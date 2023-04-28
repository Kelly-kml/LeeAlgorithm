/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @description https://leetcode.cn/problems/binary-tree-level-order-traversal/
 * @param {TreeNode} root
 * @return {number[][]}
 */

// 递归
var levelOrder = function (root) {
  if (!root) {
    return []
  }
  let res = []
  dfs(root, 0, res)
  return res
}

function dfs (root, step, res) {
  if (root) {
    if (!res[step]) {
      res[step] = []
    }
    res[step].push(root.val)
    dfs(root.left, step + 1, res)
    dfs(root.right, step + 1, res)
  }
}

// 非递归
var levelOrder = (root) => {
  let queue = [], res = []
  if (root) {
    queue.push(root)
  }
  while (queue.length) {
    let next_queue = [], now_res = []
    while (queue.length) {
      root = queue.shift()
      now_res.push(root.val)
      root.left && next_queue.push(root.left)
      root.right && next_queue.push(root.right)
    }
    queue = next_queue
    res.push(now_res)
  }
  return res
}