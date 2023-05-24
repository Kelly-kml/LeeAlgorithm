Function.prototype.myBind = function (thisArg, ...arg) {
  const fn = this
  return function (...rest) {
    return fn.apply(thisArg, [...arg, ...rest])
  }
}