// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.
//
//
//
// Example 1:
//
// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Example 2:
//
// Input: [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
//
// Para an arr of interger
// Return sorted squares
// Example
// sorted by the aboslute value
// utilize the map function to square the array

const sortedSqaures =arr =>{
  let sortedArr = arr.sort((a,b) => (Math.abs(a) - Math.abs(b)))
  return sortedArr.map( x => x*x)
}
console.log('t1',sortedSqaures([-7,-3,2,3,11]),[4,9,9,49,121] )
// node sortedSquares.js
