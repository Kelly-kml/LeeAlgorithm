/*
 * @Description: 
 * @author: kelly
 * @Date: 2023-11-14 20:44:34
 * @LastEditTime: 2024-01-03 17:34:46
 */
/**
 * description 关系型数组转换成树形结构对象
 * 
 var obj = [
  { id:3, parent:2 },
  { id:1, parent:null },
  { id:2, parent:1 }
]
转换成
o = { 
  id: 1, 
  parent: null, 
  children: [{ 
    id: 2, 
    parent: 1, 
    children: [{ 
      id: 3, 
      parent: 2 
    }] 
  }]
};
 */



var obj = [
  { id: 3, parentId: 2 },
  { id: 1, parentId: null },
  { id: 2, parentId: 1 },
];
const list = [
  { id: 1 },
  { parentId: 1, id: 2 },
  { id: 3 },
  { parentId: 3, id: 4 },
  { parentId: 4, id: 5 }
];

var data = [
  { id: 1, parentId: 0, name: '超市' },
  { id: 2, parentId: 0, name: '生鲜区' },
  { id: 3, parentId: 1, name: '零食区' },
  { id: 4, parentId: 2, name: '大虾' },
  { id: 5, parentId: 2, name: '猪肉' },
  { id: 6, parentId: 13, name: '卫生纸' },
  { id: 7, parentId: 3, name: '薯片' },
  { id: 8, parentId: 7, name: '烧烤味' },
  { id: 9, parentId: 7, name: '黄瓜味' }
];

// 简单使用forEach进行一个遍历循环处理数据
const recurrenceFilter1 = list => {
  // 1. 定义两个中间变量
  const treeList = []
  const map = {}
  // 2. 添加一个空数组children
  list.forEach(item => {
    if (!item.children) {
      item.children = []
    }
    map[item.id] = item
  })
  // 3. 循环处理每个元素
  list.forEach(item => {
    const parent = map[item.parentId]
    if (parent) {
      parent.children.push(item)
    } else {
      treeList.push(item)
    }
  })
  console.log(treeList);
  return treeList;
}


// 使用Map进行数据的存储优化算法
function recurrenceFilter (data) {
  var result = [];//存储结果
  var map = new Map(); //存在id,对应所在的内存地址
  var tempObj, parentId;
  data.forEach(item => {
    parentId = item.parentId;
    //map中存在parentId
    if (map.has(parentId)) {
      //存在parentId则将些信息加入到对应id=parentId的对象上的children
      // parentId这项是否存在children
      if (!map.get(parentId).children) {
        map.get(parentId).children = [];
      }
      var obj = new Object(item);
      map.get(parentId).children.push(obj);
      map.set(item.id, obj);
    } else if (!map.has(parentId)) {
      //处理parentId不存在且parentId为0的情况
      // 1.将该项push到result
      // 2. id为key，该项对象为value存储
      tempObj = new Object(item);
      result.push(tempObj);
      map.set(item.id, tempObj);
    }
  })
  console.log(result);
  return result;
}


recurrenceFilter(obj);
recurrenceFilter(list);
recurrenceFilter(data);


/**
 * 扩展:
 * 逆向思维：实现数组的扁平化处理
 */
/**
 * @link 扁平化嵌套数组:https://leetcode.cn/problems/flatten-deeply-nested-array/
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  let res = [];
  const flattening = (nums, l) => {
    for (const num of nums) {
      if (Array.isArray(num) && l > 0) {
        flattening(num, l - 1);
      } else {
        res.push(num);
      }
    }
  }
  flattening(arr, n);
  return res;
};