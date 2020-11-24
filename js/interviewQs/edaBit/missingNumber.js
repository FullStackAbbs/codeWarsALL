// Find the Missing Number
// Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
//
// Examples
// missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
//
// missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
//
// missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7
// Notes
// The array of numbers will be unsorted (not in order).
// Only one number will be missing.
// Parameters an array from 1 to 10
// Return the missing number of the array
// Psuedocde
// create a hash map
// check which item has a diifference in the hash map
// select the Object.key of that item and subtract it by 1
const missingNumber = arr =>{

let order = arr.sort((a,b) => a-b)
for(i=0;i<order.length;i++){
  if(order[i]+1 !== order[i+1]){
    return(order[i]+1)
  }
}
}
console.log(missingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10]), 5)
//
console.log(missingNumber([7, 2, 3, 6, 5, 9, 1, 4, 8]),10)
//
console.log(missingNumber([10, 5, 1, 2, 4, 6, 8, 3, 9]),7)
// node missingNumber.js
