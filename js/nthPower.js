// https://www.codewars.com/kata/57d814e4950d8489720008db/javascript
// You are given an array with positive numbers and a number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.
//
// Let's look at a few examples:
//
// array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
// array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.
//
//
// PREP
// Parameters: an array with numbers
// Return: if index is avaiable n-index^n or if unaviable -1
// Example: array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
//          array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.
// Psuedo Code:
// (x) an array of numbers
// (x) extract numbers from array based on index
// (x) calculate extracted number to the nth power
// (x) return the answer or -1
var numbers=[0,1,2,3,4,5,6];
var indexNumber=numbers[4];

function nthPower(numbers,indexNumber){
  if (indexNumber === "undefined"){
    console.log("-1");}
    else{
      ans=Math.pow(indexNumber,number);
      console.log(ans);
    }
}
 // OR

 var numbers=[0,1,2,3,4,5,6];
 var indexNumber=numbers[4];


 function nth-power(numbers,indexNumber)
    ans=Math.pow(numbers,indexNumber)
    if (ans === "NaN"){
      return ("-1")}
      else {
        return ${ans}
      }
    }
