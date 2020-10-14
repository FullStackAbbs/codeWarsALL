// Digital root is the recursive sum of all the digits in a number.
//
// Given n, take the sum of the digits of n.
// If that value has more than one digit, continue reducing in this way until a single-digit number is produced.
//  The input will be a non-negative integer.
//  Examples
//      16  -->  1 + 6 = 7
//     942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
//  132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
//  493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

 // take in the numbers
 // split and add up the to the intNum
 // take the intNum back into the Function
 // if the intNum is less than 10 return intNum

 function digitalRoot(int){

  let strInt = String(int)
  let sum=0
  if (int > 9){
    // if the input is more than 9 then....
    for(let digit in strInt){
      // iterate thru the string version of the input
      let num=Number(digit)
      // turn the current input digit into a numb
      sum = sum + num
    }
  }
  if (int > 9){
    for(let digit in strInt){
      let num=Number(digit)
      sum = sum + num
    }
  }
  if (sum > 9 && sum > 0){
    return digitalRoot(sum)
  }
  if (sum < 9){
    return sum
    }
  }

console.log(digitalRoot(942))

// node digitalRoot.js
