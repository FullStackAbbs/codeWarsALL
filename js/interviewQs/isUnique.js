// Does the string have unique characters?
// Parameters "a string", check for length and error handling for types that are not strings
// Return boolean of T or F
// Example abbey false edwin true f true 432,false
// Pscuedocode

// Create a character map for the string
// if the character map char has value of more than 2
// return false
// otherwise return true

// Iterate through the string
// add unique character arr
// if the element is already with the unique charater array
// return false
// otherwise return true

// split and sort the string
// Iterate through the sorted splited string
// create pointers based on index
// if i AND i+1 are the same character
// return false
// if loop is completed return true
// function isUnique(str){
//   if(typeof(str) !== 'string'){
//     return 'invalid input'
//   }
//   if(str.length ===1){
//     return true
//   }else{
//     splitSort = str.toUpperCase().split('').sort()
//     for(let i=0; i<splitSort.length;i++){
//       if(splitSort[i]=== splitSort[i+1]){
//          console.log(splitSort[i],splitSort[i+1])
//          return false
//       }
//     }return true
//   }
// }

// const isUnique = str =>{
//   if(typeof(str) !== 'string'){
//     return 'invalid input'
//   }
//   if(str.length ===1){
//     return true
//   }else{
//     splitSort = str.toUpperCase().split('').sort()
//     for(let i=0; i<splitSort.length;i++){
//       if(splitSort[i]=== splitSort[i+1]){
//          console.log(splitSort[i],splitSort[i+1])
//          return false
//       }
//     }return true
//   }
//
// }

// const isUnique = str => {
//   if(typeof(str) !== 'string'){
//       return 'invalid input'
//     }
//   if(str.length ===1){
//       return true
//     }else{
//       return countMap(str)
//     }
// }
//
// const charMap = str => {
//   let countMap= {}
//   for(let char of str.toUpperCase()){
//     countMap[char] = countMap[char] + 1 || 1
//     if (countMap[char] > 1){
//       return false
//     }
//   }
//   return true
// }

const isUnique = str => {
    if(typeof(str) !== 'string'){
        return 'invalid input'
      }
    if(str.length ===1){
        return true
      }else{
        let check = new Set(str).size
        return check === str.length
}
}

console.log('test 1',isUnique('abeyb'),'Expected: false')
console.log('test 2',isUnique('edwin'),'Expected: true')
console.log('test 3',isUnique('f'),'Expected: true')
console.log('test 4',isUnique([2,5,3]),'Expected: invalid input')
console.log('test 5',isUnique({}),'Expected: invalid input')

// node isUnique.js
