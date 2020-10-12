// node isPalindromeBuddy.js

// A palindromic number reads the same both ways.
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.' 

// Paras interger
// Return the largest Palindromeeeee
// Example 91 x 90 = 9009
// PC/Example
// we can create Function get numbers
// nested loop will go to 1 100
// get the product
// print the number

//largestPalindrome declare
// we can function numPalidrome
//  numStr ... change the interger to a str
//  checkNumReverse .... split reverse join
// check (IF CONDITION) (is numStr the exact same is checkNumReverse)
  //  // action :largestPalindrome = numStr


  function isNumPalindrome(){
    let largestPalindrome = 0
    for(let i=0;i<1000;i++){
      for(let k=0;k<1000;k++){
        product=i*k // get all product from 1-99
        numStr = product.toString() // number to string
        checkNumReverse = numStr.split('').reverse().join('') //split,reverse,join string
        numCheck = Number(checkNumReverse) // convert back to number
        if (product === numCheck && product > 0 && product !== undefined){ //if the orginal number and the reversed num are the same
          let largestPalindrome = product // replace the largestPalindrome value
          console.log(largestPalindrome)
          }
        }

      }
    }


  console.log(isNumPalindrome())
