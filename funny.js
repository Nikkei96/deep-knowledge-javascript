// #1. Сложение двух чисел через строки
function sum(a, b) {
  return ' '.repeat(a).concat(' '.repeat(b)).length
}

console.log('#1. Сумма двух чисел:', sum(5, 10)) // ➝ 15
// -------------------------------------


// #2. Сортировка массива целых чисел через setTimeout
function sort(arr) {
  console.log('#2. Отсортированный массив:')
  arr.forEach(el => {
    setTimeout(() => console.log(el), el)
  })
}

const numbers = [20, 100, 55, 1, 15, 1000, 250]
sort(numbers) // ➝ 1, 15, 20, 55, 100, 250, 1000
// -------------------------------------