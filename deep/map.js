/**
 * * Просто маппер
 * @param {Array} arr 
 * @param {Function} transform 
 * @returns {Array}
 */
export default function (arr, transform) {
  let mapped = []
  arr.forEach(el => mapped.push(transform(el)))
  return mapped
}