/**
 * * Просто фильтр
 * @param {Array} arr 
 * @param {Function} filter 
 * @returns {Array}
 */
export default function (arr, filter) {
  let filtered = []
  arr.forEach(el => {
    filter(el) ? filtered.push(el) : null
  })
  return filtered
}