/**
 * * Сортирует массив через setTimeout 🤪
 * @param {Array} arr 
 */
export default function (arr) {
  arr.forEach(el => {
    setTimeout(() => console.log(el), el)
  })
}