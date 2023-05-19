// 基本思路：它是一个函数， 它接收函数A作为参数，运行后能够返回一个新的函数。
// 并且这个新函数能够处理函数A的剩余函数
// 参考链接：https://juejin.cn/post/6844903882208837645
const currying = (fn, ...args) => {
  return fn.length > args.length ? (...newArgs) => currying(fn, ...args, ...newArgs) : fn(...args)
}