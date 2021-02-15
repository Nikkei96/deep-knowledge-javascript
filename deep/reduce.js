export default function (arr, combine, start) {
  let current = start
  arr.forEach(el => {
    current = combine(el, current)
  })
  return current
}