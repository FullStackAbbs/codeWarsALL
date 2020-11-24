// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation:
// 12 contains 2 digits (even number of digits).
// 345 contains 3 digits (odd number of digits).
// 2 contains 1 digit (odd number of digits).
// 6 contains 1 digit (odd number of digits).
// 7896 contains 4 digits (even number of digits).
// Therefore only 12 and 7896 contain an even number of digits.
//
// Parameters an arr of int
// Return # of even length digits
// Example/PS
// iterate through the array
// calculate the length of each element
// conditional : if it divislbe by 2
// add to a counter (counts even numbers that are avaiable)
// return counter

const findNumbers = arr =>{
  let evenCounter=0
  arr.forEach((num) =>{
    let lengthCheck = String(num).length
    if( lengthCheck % 2 === 0){
      evenCounter++
    }
    }

  )
  return evenCounter

}
console.log('t1',findNumbers([12,345,2,6,7896]),2)
// node findNumbers.js
