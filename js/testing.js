// The goal of this exercise is to convert a string to a new string where each character in the
// new string is "(" if that character appears only once in the original string, or ")" if that character
// appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
//
// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

// Parameters : a string
// Return: parathesis
// Example: "din"      =>  "((("
//          "recede"   =>  "()()()"
// Psuedocode:
// // (a)  loop through the strings, probably a split
// // (a2) make an empty array called characters
// // (a3) stored for "d","i","n" letters
// // (a4) if the letters in the strings is found in the array (another loop interation)
// // (b)  if the indexOf is -1 then ( if its not then )
// // (c)
  let answer = "";
function parath(input){

  let storChar = ['r'];

  for(let i=0; i<storChar.length;i++){
    if (input.includes(storChar[i])){
      console.log('yes')
    }
}
  // let ans = input.includes(storChar[0])
  // console.log(ans)

// for (let i=0;i < input.length; i++){
//   if(storChar.indexOf(input[i]) === -1 ){
//     storChar.push(input[i])
//     answer += "("
//     // console.log(storChar)
//   }
//   if(storChar.indexOf(input[i]) < 0 ){
//     console.log(input[i])
//     // console.log(storChar)
//   }}
}



parath('recede');
console.log(answer)
// node testing.js
