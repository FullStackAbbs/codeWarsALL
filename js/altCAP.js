// Alternate capitalization : https://www.codewars.com/kata/alternate-capitalization
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
//
// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
//
// The input will be a lowercase string with no spaces.
//
// Good luck!
// Parameter string of letter
// Return an array of two strings with oddCaps and evenCaps
// Example capitalize("abcdef") = ['AbCdEf', 'aBcDeF'].
// Psuedocode
// // accept the string as the intial Parameter
// // spilt each string element

// // create a function that goes through an iteration of every single element based on the length of
// // the string or it can be optimize through .map but concatenated later: (x) return odd.toUppercase
// // and even.toLowerCase and (x) return even.toUppercase and odd.toLowercase
//
function capitalize(string){
  let stringElement1 = string.spilt;
  let capStringEl1 = stringElement1.map((characterLetter1,index1) =>{
     if(index1%2===0){
       characterLetter.toUpperCase()
     }else{
       characterLetter.toLowerCase()
     }

   };
   let capString1 = capStringEl1.join();
let stringElement1 = stringElement2;
let capStringEl2 = stringElement2.map((characterLetter2,index2) =>{
   if(index2%2===0){
     characterLetter.toLowerCase()
   }else{
     characterLetter.toUpperrCase()
   }

 };

// Gus said this works as well :
// function capitalize(s){
//
//   return [s.split('').map((v,i)=>i%2==0?v.toUpperCase():v.toLowerCase()).join(''),
//           s.split('').map((v,i)=>i%2!==0?v.toUpperCase():v.toLowerCase()).join('')]
// };
// make a note of this when you want to condense your code and make it drier
