import deep from './deep/index.js'
import jokes from './jokes/index.js'

// * Deep 🤖
console.log('Custom map:', deep.map([1, 2, 3, 4, 5], el => el * 2)) // ➝ [2, 4, 6, 8, 10]
console.log('Custom filter:', deep.filter([1, 2, 3, 4, 5], el => el % 2 == 0)) // ➝ [2, 4]
console.log('Custom reduce:', deep.reduce([1, 2, 3, 4, 5], (el, current) => el + current, 0)) // ➝ 15

// * Jokes 😸
console.log('stringCalc sum:', jokes.stringCalc(15, 10)) // ➝ 25
console.log('setTimeout sort')
jokes.setTimeoutSort([20, 100, 55, 1, 15, 1000, 250]) // ➝ 1, 15, 20, 55, 100, 250, 1000