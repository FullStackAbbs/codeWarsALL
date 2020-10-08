// Q: Reverse the string (3 different ways)
// Parameter : string , make sure the type is actually string (input-test)
// Return : the string reveresed
// Example : boy --> yob a --> a (if the length is 1 return str) love --> evol
// Pscuedocode:
// FIRST WAY (js built in methods):
function reverseStr(str){
  if (typeof(str) !== 'string' || str.length === 1){
    // if the string is not type string OR the str length is equal to1
        // return message your type of input is not valid OR it is a single char
    return `Your input type is not valid OR has a length of 1. Input type is : ${typeof(str)}`
  }else{
    // // ELSE - given false
    // // // split the string // b,o,y
    // // // reverse the string // y, o, b
    // // // join the string // yob
    // output = str.split('').reverse().join('')
    // return output

    // // SECOND WAY
    //   // // create var output
    //   let output=''
    // // Iterate throgh the string instead i++ in for loop i--
    //   for(let i=str.length-1; i>-1; i--){
    //   // // add the characters in reverse to the output variable
    //     output += str[i]
    //   }
    // return output
    // // // output return

    // THIRD WAY - Recursively
    // we create a function a Str --. rahma
    // // substr(1) // ahma + charAt(0) // r ----> newString = ahmar
    // // substr(1) // hmar + charAt(0) // a ----> newString = hmara
    // // substr(1) // ahma + charAt(0) // r
    // // substr(1) // ahma + charAt(0) // r
    reverseStr(str.substr(1)+str.charAt(0))
    console.log(str)

  }


}
// console.log(reverseStr('a'))
// console.log(reverseStr(['fred','dad']))
// console.log(reverseStr('jerry'))
console.log(reverseStr('rahma'))
// console.log(reverseStr(23))

// node reverseString.js
