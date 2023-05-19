// 设置节流阀
// 参考链接：https://app.yinxiang.com/fx/cec97590-4070-4750-a1c6-21d71cfdcb75
function throttle (fn, delay) {
  let flag = true, timer = null
  return function (...args) {
    let context = this
    if (!flag) return

    flag = false
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(context, args)
      flag = true
    }, delay)
  }
}