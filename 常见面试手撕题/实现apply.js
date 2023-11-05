/*
 * @Description: 
 * @author: kelly
 * @Date: 2023-05-07 19:39:08
 * @LastEditTime: 2023-10-23 11:02:28
 */
Function.prototype.myApply = function (context) {
  // 如果没有传或传的值为空对象，则context指向window
  if (typeof context === "undefined" || context === null) {
    context = window
  }
  let fn = mySymbol(context)
  context[fn] = this// 给context添加一个方法指向this
  // 处理参数，去除第一个参数this 其他传入fn函数
  let arg = [...arguments].slice(1)// [...xxx]把类数组变成数组，arguments为啥不是数组自行搜索slice返回一个新数组
  context[fn](arg)// 执行fn
  delete context[fn]// 删除方法
}

Function.prototype.applyMemo = function (context) {
  var context = context || window;
  context.fn = this;

  var result;
  // 需要判断是否存储第二个参数
  // 如果存在，就将第二个参数展开
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }

  delete context.fn;
  return result;
}