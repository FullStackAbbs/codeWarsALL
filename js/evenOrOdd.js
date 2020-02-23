// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
//
// Even Or Odd
//
// Create a function (or write a script in Shell) that takes an integer as an argument
// and returns "Even" for even numbers or "Odd" for odd numbers.
// PREP
// parameter numbers
// return true / false
// example even ODD
var x= [1,5,6,3.3];

function evenOrOdd(x){
  if (x % 2 !== 0){
    return("The number you input is ODD")
  }else if( x % 2 === 0){
    return("The number you input is EVEN")
  }else{
    return("Please select a valid input (a number greater than zero)")
  }
}
