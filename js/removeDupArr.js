// // Problem Statement: Remove Duplicate Elements from an Array
// //
// // Input: an array
// // Output: an array (no dup.)
// //
// // Example:
// //  Input: [1,2,4,2,1,5,6,5]
// //  Output: [1,2,4,5,6]
// //
//  Psuedocode:
//  [1,2,4,2,1,5,6,5]
//  (x) sort the array
//
//  [1,1,2,2,4,5,5,6]
//  (x) check the first and second index of this array
//
//  [1,2,4,5,6]
//
// (x) if the first and second index are the same, we want to.... DELETE,remove,pop
//
//

function removeDupArr(arr){
let input =arr.sort() // n log n
let output=[]; //collection
for (i=0; i < input.length; i++){ // for Loop w O(n)
  if(input[i] !== input [i+1]){ // comparsion indexing O(1)
    output.push(input[i])  // insert O(1)
  }
} // iteration: O(n) * O(1) = O(n)
  return output
}

console.log(removeDupArr([1,2,4,2,1,5,6,5]))
// node removeDupArr.js
