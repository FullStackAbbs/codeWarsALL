// node reversedInt.js
// Given an interget reverse int
// change the int to a string
// split the string up
// if the first index is a negative number then reverse from 1 to length
/// if the first index is not a negative number then reverse from 0 to length
// add each element in reverse order
// convert back to number
//
// https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5/train/javascript 
function reverseInt(int){
  let numStr=''
  let str = String(int)
    if(int > 0){
    for(let i=str.length-1;i>-1;i--){
      numStr += str[i]}}
    if(int < 0){
      numStr='-'
    for(let i=str.length-1;i>0;i--){
      numStr += str[i]}}
  return Number(numStr)
}

// reverseInt(15)=== 51
// reverseInt(-90)===-9
console.log(reverseInt(981))
console.log(reverseInt(15))
console.log(reverseInt(-90))
