// We want an array, but not just any old array, an array with contents!
//
// Write a function that produces an array with the numbers 0 to N-1 in it.
//
// For example, the following code will result in an array containing the numbers 0 to 4:
//
// arr(5) // => [0,1,2,3,4]
// https://www.codewars.com/kata/571d42206414b103dc0006a1
//
// PREP
// Parameters // N
// Return // an array with n-1 length
// Example arr(5) // => [0,1,2,3,4]
// Psuedo code
// // (x) take in the value of N
///// (x) produce the numbers between 0 and n-1
///// (x) insert the numbers into an array called array
const arr = N => [
  for(var N=0;N>N-1;N++;){
  arr.push(N);
  return arr}
  ];
