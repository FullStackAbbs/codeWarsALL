// Find the Smallest Number in an Array
// Create a function that takes an array of numbers and returns the smallest number in the set.
//
// Examples
// findSmallestNum([34, 15, 88, 2]) ➞ 2
//
// findSmallestNum([34, -345, -1, 100]) ➞ -345
//
// findSmallestNum([-76, 1.345, 1, 0]) ➞ -76
//
// findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999]) ➞ -0.9999
//
// findSmallestNum([7, 7, 7]) ➞ 7
// Notes
// Test cases contain decimals.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.
// Parameters array
// Return smallest number
// Exampel
// Pscuedocode
// create function
// intiilize the smallest number
// iterate thru the array
// if the current number is less than the current smallest numbers
// the current number will now be the smallest number
// return the smallesgt numbers
const findSmallestNum = arr =>{
  let smallNum = arr[0]
  arr.forEach((el) =>{
    if( smallNum > el){
      smallNum = el
    }
  })
  return smallNum


}
console.log('t1',findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999]),-0.9999)
console.log('t2',findSmallestNum([34, -345, -1, 100]),-345)
console.log('t3',findSmallestNum([7, 7, 7]), 7)
// node smallestNum.js
// way2
// sort the array in a decrement
// return the first index of the array
