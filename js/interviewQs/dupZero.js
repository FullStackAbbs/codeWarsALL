// Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.
//
// Note that elements beyond the length of the original array are not written.
//
// Do the above modifications to the input array in place, do not return anything from your function.
//
//
//
// Example 1:
//
// Input: [1,0,2,3,0,4,5,0]
// Output: null
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
// Example 2:
//
// Input: [1,2,3]
// Output: null
// Explanation: After calling your function, the input array is modified to: [1,2,3]
//
//
// Para array
// Return nothing a new arr called arr with dupliicate zero
// Example/PC
// checkForZeros()
// // see if zeros are in array
// // if not return the array
// addZero()
// // if a zero is present
// // insert 2 zero elements at i and i+1
// splitArray()
// // if zero is present
// // extract i+1 to length of array
// join()
// //  combine the addZero and splitArray

const duplicateZeros = arr => {

  function checkForZeros(arr){
    if(arr.indexOf(0) === -1){
      return arr
    }
  }
a
  arr.splice(5,1,0)
  
  return arr

  checkForZeros(arr)



}

console.log(duplicateZeros([1,0,2,3,0,4,5]),[1,0,0,2,3,0,0,4])
// node dupZero.js
