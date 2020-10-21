// https://music.apple.com/us/album/bang/1535790787?i=1535790791
// Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
// (The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)

//Parameter - an array
// Return - an int, the sum of the array, free of the high and low
// Example
//{ 6, 2, 1, 8, 10 } => 16
//{ 1, 1, 11, 2, 3 } => 6

// Psuedocode
// // //{ 6, 2, 1, 8, 10 } => 16
// locate the max and min from the array
// //  // 1 and 10
// create a shallow copy of the array without the min/max OR remove the min and max from the array
// // // [6,2,8]
// sum and find the total of the newly extracted array
// // // 18 = 6+2+8

const sumExpHighAndLow = arr =>{
  let high = Math.max(...arr)
  let low = Math.min(...arr)
  arr.splice(arr.indexOf(high),1)
  arr.splice(arr.indexOf(low),1)
  let sum = arr.reduce((a,b) => a+b)
  return sum
}

console.log('test 1', sumExpHighAndLow([6, 2, 1, 8, 10]),16)
console.log('test 2', sumExpHighAndLow([1, 1, 11, 2, 3]),6)
// node sumExpHighAndLow.js
