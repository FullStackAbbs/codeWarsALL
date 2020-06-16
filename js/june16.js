function largeSum(arr){
let largestIndex=arr[0];
let secLargestIndex=arr[1];
arr.forEach((el) => {

// if(el < largestIndex && el > secLargestIndex){
//   secLargestIndex = el
//   console.log(`The  second largest index element is ${secLargestIndex}`)
// }
if(el > largestIndex && el > secLargestIndex){
  secLargestIndex = largestIndex
  largestIndex = el

  console.log(`The largest index element is ${largestIndex} and 2nd largest ${secLargestIndex}`)
}


})
}

console.log(largeSum([1,4,9,11,-2,3]))

// lar=0 2ndlar=0
//
// node june16.js
