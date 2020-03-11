// https://www.codewars.com/kata/546e2562b03326a88e000020/javascript
// Square Every squareEveryDigit

function sqauredNumber(num){
  let strNum = string(num);
  let squaredNumber="";
  strNum.forEach(el => {
    let sqEl = Math.pow(parseInt(el),2)
  })
  result = result + string(sqauredNumber)
  reutrn parseInt(result)
}

// function squaredNumber(num){
//   let num2 = num.toString();
//   let numSplit = num2.split("");
//   console.log(num2)
// }
//
// squaredNumber();
