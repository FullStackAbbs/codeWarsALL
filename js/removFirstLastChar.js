https://www.codewars.com/kata/remove-first-and-last-character
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
// Paramter string
// Return new string
// Example love , ov
// Psuedocode
// /// remove chacter from index 0 and str.length=number


function removeChar(str){

 return str.slice(1,-1)
};
// A negative index can be used, indicating an offset from the end of the sequence. slice(-2) extracts the last two elements in the sequence.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// LEARNING MOMENT .slice
