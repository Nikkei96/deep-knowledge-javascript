/**
 * * Просто редьюсер
 * @param {Array} arr 
 * @param {Function} combine 
 * @param {Number} start 
 * @returns {any}
 */
export default function (arr, combine, start) {
  let current = start
  arr.forEach(el => {
    current = combine(el, current)
  })
  return current
}