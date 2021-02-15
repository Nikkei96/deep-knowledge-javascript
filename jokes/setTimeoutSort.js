export default function (arr) {
  arr.forEach(el => {
    setTimeout(() => console.log(el), el)
  })
}