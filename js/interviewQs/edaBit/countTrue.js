// Create a function which returns the number of true values there are in an array.
//
// Return 0 if given an empty array.
// All array items are of the type bool (true or false)
// Parameters an array of booleans, only booleans will be the input, no type worry
// Return the count of True with the arr
// Example
// countTrue([true, false, false, true, false]) ➞ 2
//
// countTrue([false, false, false, false]) ➞ 0
//
// countTrue([]) ➞ 0
// Psuedocode
// create a function that take in the array
// check if the array is empty by length report 0
// if not  execute the following function
// intialize a counter
// create a loop
// as going through check if the element is true
// increase counter
// when completed return the counter

const countTrue = arr =>{
  if( arr.length === 0){
    return 0
  }
  let count =0
  arr.forEach((el) =>{
    if(el === true){
      count++
    }

  })
  return count
}

function countTrue(arr) {
	 return arr.filter(x=>x==true).length
}
console.log('test 1',countTrue([true, false, false, true, false]),2 )
console.log('test 2',countTrue([false, false, false, false]),0 )
console.log('test 3',countTrue([]),0 )
// node countTrue.js
