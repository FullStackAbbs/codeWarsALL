// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript
// Complete the solution so that it reverses the string value passed into it.

// solution('world'); // returns 'dlrow'
// PREP
// Parameters user input string
// Return user inpur string reversed
// Examples solution('world'); // returns 'dlrow'
// Psuedo Code (x) user input string needs to be attained (x)isolate the letters of the string (x) -1 or reverse the order the isolate letters
// (x)reconnect the letters (x) print the letters
//
var str="Abigail";
// (x) user input string needs to be attained
function flippedString(str){
  // (x)isolate the letters of the string
  var letterSet=str.spilt('');
  // (x) -1 or reverse the order the isolate letters
  newLetterSet= letterSet.reverse();
  // note: still confused as to why it did not work when it created a new variable for it within the localized area to only be used there as well
  newLetterSet=letterSet.join('');
  // (x)reconnect the letters (x) print the letters
  return newLetterSet;
  // (x) print the letters
}
