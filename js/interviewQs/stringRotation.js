// String Rotation: Assume you have a method isSubstringwhich checks if one word is a substring
// of another. Given two strings, sl and s2, write code to check if s2 is a rotation of sl using only one
// call to isSubstring (e.g., "waterbottle" is a rotation of"erbottlewat")
// //
// //
// Paramters: two string
// Return true false answer if s2 is rotation of s1
// Example "waterbottle" is a rotation of"erbottlewat"
// Psuedocode
// // // check the lengths and typeof
// // create a character map
// // create charMap for each string
// // iterate through  the s2 charMap
// // check if the s2[char] is the NOT same as s1[char]
// // return false or s1 is not a rotation
// //return true
function buildCharMap(str){
  const charMap={}
  for(let char of str){
    charMap[char] = charMap[char]+1 || 1
  }
 return charMap
}

const isSubstring = (str1,str2) => {
  if(typeof(str1) !== 'string' || typeof(str2) !== 'string'  ){
    return `invalid input, this is a ${typeof(str1)} and a ${typeof(str2)}`
  }
  if (str1.length > str2.length){
    return false
  }else{
  const charMapStr1 = buildCharMap(str1)
  const charMapStr2 = buildCharMap(str2)
  for(let char in charMapStr1){
    if(charMapStr1[char] < charMapStr2[char]){
    return false
  }

}return true


}}


console.log('test 1',isSubstring("waterbottle","erbottlewat"),true)
console.log('test 2',isSubstring("water","waterbottle"),true)
console.log('test 3',isSubstring("erbottlewat","abbey",),false)
console.log('test 4',isSubstring("waterbottle",4), 'invalid message')
console.log('test 5',isSubstring("waterbottle","water"),false)
console.log('TEST TEST',isSubstring("abc","ahbgdc"),true)
console.log('TEST TEST',isSubstring("axc","ahbgdc"),false)



// node stringRotation.js
