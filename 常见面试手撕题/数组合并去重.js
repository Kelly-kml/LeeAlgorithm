let fn = function () {
  console.log(arguments, 'arguments')
  const Arr_new = [].concat.apply([], arguments)
  return Array.from(new Set(Arr_new))
}

const demo1 = [1, 2, 3, 5, 6, 7]
const demo2 = [4, 5, 6, 7, 10]
const demo3 = [1, 3, 5, 9, 17]
console.log(fn(demo1, demo2, demo3))