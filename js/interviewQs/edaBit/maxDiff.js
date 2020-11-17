// Given an array of integers, return the difference between the largest and smallest integers in the array.

// paramters an array
// return the difference between the largest and smallest intergers
// example
// Pscuedocode//
// what the most effective way to find the largest and smallest interger in a non sorted array?
  // use js Max and min functions
// calculate difference

const maxDiff = arr =>{
  return  (Math.max(...arr)) - (Math.min(...arr))
}

console.log('t1',maxDiff([10, 15, 20, 2, 10, 6]),18)
console.log('t2',maxDiff([-3, 4, -9, -1, -2, 15]),24)
console.log('t3',maxDiff([4, 17, 12, 2, 10, 2]),15)
// node maxDiff.js
