// // Leetcode Level : Easy
// // Leetcode problem: Number of Steps to Reduce a Number to Zero
//
//
//
// Given a non-negative integer num, return the number of steps to reduce it to zero. If the current number is even,
// you have to divide it by 2, otherwise, you have to subtract 1 from it.
//
// Parameter: a num that is not negative
// Return: the number of steps to reduce it to zero
// Example : Input: num = 14
// Output: 6
// Step 1) 14 is even; divide by 2 and obtain 7.
// Step 2) 7 is odd; subtract 1 and obtain 6.
// Step 3) 6 is even; divide by 2 and obtain 3.
// Step 4) 3 is odd; subtract 1 and obtain 2.
// Step 5) 2 is even; divide by 2 and obtain 1.
// Step 6) 1 is odd; subtract 1 and obtain 0.
//
// Psuedocode: (definetly could be a recurison ie return reducetoZero(num))
// if the num is even then divide by 2 and count+1 but it IS NOT even then subtract one and count +1


// function ReduceToZero(num) {
//   count = 0;
//   while (num !== 0){
//     if(num %2 ===0){
//       num = num/2
//       count++
//     }else{
//       num = num - 1
//       count++
//     }
//   }
//   return count
//
// };
const even = function(){
  num = num/2
  count++
}
const odd = function(){
  num = num - 1
  count++
}
function ReduceToZero(num){
  let count = 0;
  (num !== 0 && num % 2 === 0 ) ? even() : odd()
  return ReduceToZero()

}
console.log(ReduceToZero(14))
// node reduce2zero.js
