// Greatest Common Divisor
// Question: How would you find the greatest common divisor of two numbers?
// Paramater two numbers
// Return the greatest common divsior of the two numbers
// Example 25 15 common: 1 5
// Psuedocode
// if the num1 is greater than num2 iterate for the length of num1
// if the num1 is less than num2 iterate the length of num2
// if num1 % i = 0 and num2 % i =0
// we need to make i the greatest common divisor and thats it bc it
//  should iterate to the greatest in ascedning order
// ...add to the collection array, sort that array based on decesnding order and grab the first element
function greatestCommonDivisor(num1,num2){
  arr=[];
  if(num1 > num2){
    for(let i=1; i < num1;i++){
      if(num1 % i === 0 && num2 % i === 0){
        arr.push(i)
      }
  }}
  if(num1 < num2){
    for(let i=1; i < num1;i++){
      if(num1 % i === 0 && num2 % i === 0){
        arr.push(i)
      }

  }}
  if(num1 = num2){
    for(let i=1; i < num1;i++){
      if(num1 % i === 0 && num2 % i === 0){
        arr.push(i)
      }

  }}

  return arr[arr.length-1]


}
console.log(greatestCommonDivisor(10,1000))
//node may31.js
