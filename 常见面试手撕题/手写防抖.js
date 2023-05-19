// 比如：输入框
const debounce = (fn, delay) => {
  let timer = null
  return () => {
    if (timer) clearTimeout(timer)
    setTimeout(fn, delay)
  }
}