export default function (arr, transform) {
  let mapped = []
  arr.forEach(el => mapped.push(transform(el)))
  return mapped
}