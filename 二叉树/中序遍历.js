/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @description https://leetcode.cn/problems/binary-tree-inorder-traversal/
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归
var inorderTraversal = function (root, arr = []) {
  if (root) {
    inorderTraversal(root.left, arr)
    arr.push(root.val)
    inorderTraversal(root.right, arr)
  }
  return arr
}

// 非递归
var inorderTraversal = function (root, arr = []) {
  const stack = [], res = []
  let current = root
  while (current || stack.length > 0) {
    while (current) {
      stack.push(current)
      current = current.left
    }
    current = stack.pop()
    res.push(current.val)
    current = current.right
  }
  return res
}