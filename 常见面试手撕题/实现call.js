// call/apply/bind的区别可查看：https://juejin.cn/post/6844903773979033614#heading-5
Function.prototype.myCall = function () {
  let [thisArg, ...args] = [...arguments]
  thisArg = Object(thisArg) || window
  const fn = Symbol()
  thisArg[fn] = this
  const result = thisArg[fn](...args)
  delete thisArg[fn]
  return result
}