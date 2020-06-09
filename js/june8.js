//
// 12. Remove duplicate characters from a sting?
// Parameters string
// Return string with removed duplicates
// Example 'abigail' return abigl
// Psuedocode
// create a new string based on the fact whether the character is already in the output string
function removeDuplicate(input){
  let output="aaba"
  for (let i=0;i < input.length; ){
    if ( output.includes('a' ){
        i++
    }else{
      output =+ input[i]

    }
    // console.log(output.includes(input[i]), [i])
  }
  return output

}
console.log(removeDuplicate('abigail'))


// node june8.js
