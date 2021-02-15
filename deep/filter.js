export default function (arr, filter) {
  let filtered = []
  arr.forEach(el => {
    filter(el) ? filtered.push(el) : null
  })
  return filtered
}