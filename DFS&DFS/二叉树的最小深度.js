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

// 递归思路

// - 先判断根节点是否为空，空的话就返回 0
// - 如果左右子树都为空，则根节点也是叶子节点，最小深度为 1
// - 如果当前节点的左节点为空，那么就遍历右节点，确定最小深度
// - 如果当前节点的右节点为空，那么就遍历左节点，确定最小深度
// - 遍历当前节点的左右节点，比较两者取最小值
// - 特别注意上述的值一定要记得加上根节点（+1）

var minDepth = function (root) {
  if (!root) return 0
  if (root.left === null && root.right === null) {
    return 1
  }
  if (!root.left) return minDepth(root.right) + 1
  if (!root.right) return minDepth(root.left) + 1
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1
}




// 非递归思路

// - 判断根节点是否为空，空的话返回 0
// - while 每循环一次，就是遍历一层，如果当前层出现左右节点都是为 null,当前节点对应的深度就是最小深度

var minDepth = function (root) {
  if (!root) return 0
  let queue = [root], res = 0
  while (queue.length) {
    let temp = []
    res += 1
    // 遍历某一层
    for (let i = 0; i < queue.length; i++) {
      // 第一次遇到左右节点为空，就是叶节点
      if (queue[i].left === null && queue[i].right === null) return res
      if (queue[i].left) {
        temp.push(queue[i].left)
      }
      if (queue[i].right) {
        temp.push(queue[i].right)
      }
    }
    queue = temp
  }
  return res
}