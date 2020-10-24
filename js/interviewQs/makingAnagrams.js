// node makingAnagrams.js
// Paramters two strings
// Return number of deletions to make string anagrams of each other
// Ex s1 = abc s2- amnop
// s1 and s1 have A in common
// bc would need to be remove 2
// mnop would need to ne remove 4
// Psuedocode
// build a charMap for each strings
// check what characters and their value are not in stringA
 // // if so add the value of the char to the deletion count
// check what chacrters and their value are not in stringB
// // if so add the value of the to the deltion count
// return the deltion count


const makingAnagrams = (str1,str2) =>{





// check which string is bigger
  // if itd in common push it and gets its length
  // smallerDiff = (small=length) - whats in common
  // largerDiff = (larger length ) - whats in inCommon
  // smaller + larger
  const buildCharMap = str =>{
    let charMap={}
    for(let char of str){
      charMap[char] = charMap[char] + 1 || 1
    }
  return charMap
  }


const charMapA = buildCharMap(str1)
const charMapB = buildCharMap(str2)
let deleteNeed =0
let del = [];

for(let char in charMapA){
  if ( charMapA[char] !== charMapB[char]){
    deleteNeed += charMapA[char]
    del.push(Object.)
  }
}
// for(let char in charMapB){
//   if (charMapB[char] !== charMapA[char]){
//     deleteNeed += charMapB[char]
//   }
// }

return del


}
console.log('test 1',makingAnagrams('cde','abc'),4)
console.log('test 2',makingAnagrams('absdjkvuahdakejfnfauhdsaavasdlkj','djfladfhiawasdkjvalskufhafablsdkashlahdfa'),19)

// node makingAnagrams.js
