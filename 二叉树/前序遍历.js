/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @description https://leetcode.cn/problems/binary-tree-preorder-traversal/
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归
var preorderTraversal = (root, arr = []) => {
  if (root) {
    arr.push(root.val)
    preorderTraversal(root.left, arr)
    preorderTraversal(root.right, arr)
  }
  return arr
}

// 非递归
var preorderTraversal = (root, arr = []) => {
  const stack = [], res = []
  let current = root
  while (current || stack.length > 0) {
    while (current) {
      res.push(current.val)
      stack.push(current)
      current = current.left
    }
    current = stack.pop()
    current = current.right
  }
  return res
}