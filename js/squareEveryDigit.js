// https://www.codewars.com/kata/546e2562b03326a88e000020/javascript
// Square Every squareEveryDigit
let p = document.querySelector('p').innerHTML;

let num = 435;
let num2 = num.toString();
let numSplit = num2.split("");
let numSquared = [];

numSplit.forEach(function work(parseInt(el)){
  let newEl = Math.pow(el,2);
  numSquared.push(newEl)
})

nu
console.log(numSquared)


// function squaredNumber(num){
//   let num2 = num.toString();
//   let numSplit = num2.split("");
//   console.log(num2)
// }
//
// squaredNumber();
