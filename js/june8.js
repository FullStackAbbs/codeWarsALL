//
// 12. Remove duplicate characters from a sting?
// Parameters string
// Return string with removed duplicates
// Example 'abigail' return abigl
// Psuedocode
// create a new string based on the fact whether the character is already in the output string
function removeDuplicate(input){
  //attain the input string
  // iterate thru each character of the string
  // check if the character on the pointer is in the output value
  // if false: it should add the character to the output variable
  // if true: go the next iterated index
  // once the loop is completed return the output value
let output = '';
for (i=0;i < input.length; ){
  if(output.includes(input[i])){
    i++
  }else{
    output += input[i]
  }
  // console.log(input[i])
}
return output

}
console.log(removeDuplicate('abigail'))


// node june8.js
