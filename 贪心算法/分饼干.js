/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
/**
 * 这道题有两种方式：
 * （1）尽量用大饼干去喂饱胃口大的小孩，不要浪费了饼干
 * （2）尽量用小饼干去喂饱胃口小的小孩，用最少的饼干尽量喂最多的人
 */


// 1）尽量用大饼干去喂饱胃口大的小孩，
// 从大到小遍历
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let n = s.length - 1;
  let count = 0;
  for (let i = g.length - 1; i >= 0; i--) {// 胃口容量
    if (n >= 0 && s[n] >= g[i]) {// 饼干
      count++;
      n--;
    }
  }
  return count;
};


// （2）尽量用小饼干去喂饱胃口小的小孩
// 从小到大遍历
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < s.length; i++) {// 饼干
    if (count < g.length && g[count] <= s[i]) { // 胃口容量
      count++;
    }
  }
  return count;
};
// 时间复杂度：O(nlogn);空间复杂度：O(1)