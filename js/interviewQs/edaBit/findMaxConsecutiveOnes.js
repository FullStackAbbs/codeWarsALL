// node findMaxConsecutiveOnes.js
// Given a binary array, find the maximum number of consecutive 1s in this array.
//
// Example 1:
// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
//     The maximum number of consecutive 1s is 3.
// Note:
//
// The input array will only contain 0 and 1.
// The length of input array is a positive integer and will not exceed 10,000
// // Paramter an arr
// Return the consectiveMax of 1s
// Example
// PS
// iterate throigh string
// function checkPointer
// //


const findMaxConsecutiveOnes = arr =>{
  let countOnes=0
  let maxConsecOnes=0
  for(let i=0; i<arr.length;i++){
    if(arr[i]===1){
      countOnes++
    }
    else{
      if(countOnes > maxConsecOnes){
        maxConsecOnes = countOnes
      }
      if(maxConsecOnes >= arr.length/2){
        return maxConsecOnes
      }
      countOnes=0
    }
}
return Math.max(maxConsecOnes, countOnes)
}
// console.log(maxConsecOnes)

console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]),2)
