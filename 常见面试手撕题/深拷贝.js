/*
 * @Description: 
 * @author: kelly
 * @Date: 2023-05-07 11:02:28
 * @LastEditTime: 2023-11-23 15:04:54
 */
/**
 * @description 手写深拷贝
 * @param {*} obj 
 * @returns newObj
 */
/* 
  深拷贝与浅拷贝的概念可以查看： https://developer.aliyun.com/article/1129575
  利用 WeakMap 类型作为 Hash 表，因为 WeakMap 是弱引用类型，可以有效防止内存泄漏
  作为检测循环引用很有帮助，如果存在循环，则引用直接返回 WeakMap 存储的值，防止循环占太大的内存导致爆栈
  */
function cloneDeep (obj, hash = new WeakMap()) {
  if (obj === null || typeof obj !== "object") return obj
  if (obj instanceof RegExp) return new RegExp(obj)
  if (obj instanceof Date) return new Date(obj)
  // 如果循环引用了就用weakMap来解决
  if (hash.has(obj)) {
    return hash.get(obj)
  }
  // 遍历传入参数所有键的特性
  let cloneObj = new obj.constructor()
  // 继承原型链
  hash.set(obj, cloneObj)
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = cloneDeep(obj[key], hash)
    }
  }
  return cloneObj
}

//测试用例
let obj = {
  a: 1,
  b: {
    c: 2,
    d: 3
  },
  d: new RegExp(/^\s+|\s$/g)
}

let clone_obj = deepClone(obj)
obj.d = /^\s|[0-9]+$/g
console.log(clone_obj)
console.log(obj)
