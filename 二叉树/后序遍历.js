/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @description https://leetcode.cn/problems/binary-tree-postorder-traversal/
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归
var postorderTraversal = function (root, arr = []) {
  if (root) {
    postorderTraversal(root.left, arr)
    postorderTraversal(root.right, arr)
    arr.push(root.val)
  }
  return arr
}

// 非递归
var postorderTraversal = function (root) {
  const stack = [], res = []
  let current = root, last = null
  while (current || stack.length > 0) {
    while (current) {
      stack.push(current)
      current = current.left
    }
    current = stack[stack.length - 1]
    if (!current.right || current.right == last) {
      current = stack.pop()
      res.push(current.val)
      last = current
      current = null
    } else {
      current = current.right
    }
  }
  return res
}