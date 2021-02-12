// #1. Функция map для массива
function map(arr, transform) {
  let mapped = []
  arr.forEach(el => mapped.push(transform(el)))
  return mapped
}

const expression_1 = map([1, 2, 3, 4, 5], el => el * 2)
console.log('Массив с map на умножение каждого элемента массива на 2:', expression_1) // ➝ [2, 4, 6, 8, 10]
// -------------------------------------


// #2. Функция filter для массива
function filter(arr, filter) {
  let filtered = []
  arr.forEach(el => {
    filter(el) ? filtered.push(el) : null
  })
  return filtered
}

const expression_2 = filter([1, 2, 3, 4, 5], el => el % 2 == 0)
console.log('Массив с filter на проверку каждого элемента массива на чётность:', expression_2) // ➝ [2, 4]
// -------------------------------------

// #3. Функция reduce для массива
function reduce(arr, combine, start) {
  let current = start
  arr.forEach(el => {
    current = combine(el, current)
  })
  return current
}

const expression_3 = reduce([1, 2, 3, 4, 5], (el, current) => el + current, 0)
console.log('Массив с reduce на сложение всех чисел массива: ', expression_3)
// -------------------------------------
