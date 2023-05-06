/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 递归思路：
// 1、深度优先遍历
// 2、每次分别递归左节点和右节点。然后比较两者，取最大值
// 3、特别注意：一定要记得加上原本没有算上的根节点（+1）
var maxDepth = function (root) {
  if (!root) return 0
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}

// 非递归思路：
// 1、广度优先遍历
// 2、每一个用一个数组 temp 存放上一层的所有节点，每一个层遍历结束，计数器 res +1
// 3、当 temp 为空时，也就是此时都是叶节点的情况，可以退出循环
var maxDepth = function (root) {
  if (!root) return 0
  let queue = [root], res = 0
  while (queue.length) {
    let temp = []
    for (let i = 0; i < queue.length; i++) {
      if (queue[i].left) {
        temp.push(queue[i].left)
      }
      if (queue[i].right) {
        temp.push(queue[i].right)
      }
    }
    res += 1
    queue = temp
  }
  return res
}