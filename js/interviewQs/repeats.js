// You will be given an array of numbers in which two numbers occur once and the rest occur only twice.
// Your task will be to return the sum of the numbers that occur only once
// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15.
//
// In what ways can we find numbers the occur only once
// How can I collect and sum these "one-time" values
//
// Para an arr must be an arr of intergers
// Return the sum of "one time " intergers
// Example
// Psuedocode
// Way 1
// create a charMap
// based on charMap results :
//  if charMap[char] is === 1
//  add the char or int to the on going summation
//
//  Way 2
//  sort the array
//  Iterate through the array
//  if the index between i and i+1 are different
//  add index i to the summation count


const buildIntMap = arr =>{
  let sum = 0
  let collectArr=[]
  const intMap={}
  for (let int of arr){
    intMap[int] = intMap[int] +1 || 1
  }
  return intMap
}
 const repeats = arr => {
   const intMap = buildIntMap(arr)
   for(let num in intMap){
     if (intMap[num] < 2){
       // let intNum = parseInt(num)
       sum += parseInt(num)
       collectArr.push(parseInt(num))
       console.log('this number is:' ,parseInt(num))


     }
   }



 }

console.log('test 1',repeats([4,5,7,5,4,8]),15)

// node repeats.js
