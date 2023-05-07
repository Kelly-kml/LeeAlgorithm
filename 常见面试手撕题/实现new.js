// 创建一个对象obj,它的__proto__原型指向这个函数的prototype
// 执行这个函数，通过apply改变this
// 判断结果 返回
function myNew () {
  const obj = {}
  const [fn, ...args] = [...arguments]
  obj.__proto__ = fn.prototype
  const res = fn.apply(obj, args)
  if (typeof res === 'object' && res !== null) {
    return res
  }
  return obj
}