// 17. Find the largest sum of any two elements in an unsorted array?
//
// Parameters (an array of numbers ONLY)
// Return the sum of the two largest elements
// Example [1,4,2] 4+2=6 output 6
// Psuedocode
// (1) sort the array in descending order
// (*) edgecase (if the  two largest are the same elements)
// (2) grab the first and second index and add those values
// (3) return the output

function largeSum(arr){
  let input = arr.sort((a,b) =>  {
    return b-a
  })
  output = input[0] + input[1]
  return output
}

console.log(largeSum([1,4,2]))

// 
// node june15.js
