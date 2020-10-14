
function anagrams(stringA,stringB){
  // we first have to create the function getCharMap to attain the charMap for each string
const charMapA = getCharMap(stringA)
const charMapB = getCharMap(stringB)

// define variable to keep track of difference in char value between maps
let diffCharCount=0
let diff=0
  // we iterate through one of the charMap to check if the values within are equal
for (let char in charMapA) {
  // for every character in this charMapA
     if (charMapA[char] !== charMapB[char]) {
       let diff = Math.abs(charMapA[char]-charMapB[char])
       console.log(diff)
       // if the character value is not the same in the other map return false
        // console.log(charMapA[char])
         }
          // console.log(charMapA[char])
     }



 // the function we need to declare to attain the character map for any given string
function getCharMap(string) {
     // We define an empty object that will hold the key - value pairs.
     let charMap = {}

     /*We loop through each character in the string. if the character
     already exists in the map, increase the value, otherwise add it
     to the map with a value of 1 */
     for (let char of string) {
         charMap[char] = charMap[char] + 1 || 1
     }
     return charMap
 }
}

console.log(anagrams('abbe','yebba'))
// node anagramsDiff.js
