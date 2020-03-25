https://www.codewars.com/kata/57470efebf81fea166001627

noobCode 03: CHECK THESE LETTERS... see if letters in "String 1" are present in "String 2"

Write a function that checks if all the letters in the second string are present in the first one at least once, regardless of how many times they appear:

["ab", "aaa"]    =>  true
["trances", "nectar"]    =>  true
["compadres", "DRAPES"]  =>  true
["parses", "parsecs"]    =>  false
Function should not be case sensitive, as indicated in example #2. Note: both strings are presented as a single argument in the form of an array.

// Parameters 2 strings
// Return boolean
// Examples : ["compadres", "DRAPES"]  =>  true , ["parses", "parsecs"]    =>  false
// Psuedocode
// // create a function that iterates for every element string 2  // note: must be taken to
// // lowercase to be compared.
// //  if the string2[i] is included inside of string1 return true
// // possibly create a true counter but probably not needed
function letterCheck(arr) {

 let string2bChecked = arr[1].toLowerCase;
 let singleLetters = arr[2].toLowerCase;
 let singLet = arr[2].split;

 for (let i=0; arr[2].length < i; i++)

   if(string2bChecked.includes(singLet[i]){
   return true}
 else{
   return false}
   }
   }
***
