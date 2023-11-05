/*
 * @Description: 
 * @author: kelly
 * @Date: 2023-05-07 14:35:56
 * @LastEditTime: 2023-10-23 11:07:40
 */
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

Function.prototype.CallMemo = function (context) {
  var context = context || window;
  // 给context添加一个属性
  // getValue.call(a, 'kelly', '25') => a.fn= getValue;
  context.fn = this;
  // 将context后面的参数取出来
  var args = [...arguments].slice(1);
  var result = context.fn(...args);
  // 删除fn
  delete context.fn;
  return result;
}