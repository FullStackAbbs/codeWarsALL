// HackerRank

// Cracking The Coding Interview, the problems from there and HR



// First non repeating character
// Parameter intakes a string
// Return the first Non Repeat character
// Example:
// // 'the quick brown fox jumps then quickly blow air'
// // 'f'
// Psuedocode
// //
// (x) a double interation
// (x) iterate thru the string aganist each other.
//
// (x) (reduce to n inputs)
// create a loop using the input and count the characters
// check for the comparison

// iterate through each character
// compare the current character to the input in a seperate element
// within the specfic character iteration, count # of time the element comes up
// once the count = 1, save that charater as the first non repeat character
// //


// function firstNonRepeatChar(input){
//   let arrElm = input.toLowerCase();
//   let nonRepChar = null;
//   for(let i=0; i<arrElm.length;i++){ // for every letter in the checked array
//     let count=0;
//     for(let j=0; j<arrElm.length;j++){ //
//       if( arrElm[i]  === arrElm[j]){
//         count++
//       }
//     }
//     if (count === 1 ){
//       nonRepChar = arrElm[i];
//     }
//     if(nonRepChar !== null){
//       return nonRepChar
//     }
//     console.log(count)
//   }
//   return "no characters found"
//
// }
//
//
// console.log(firstNonRepeatChar('the quick brown fox jumps then quickly blow air'))
// node june4.js

function bestNonRepeatChar(input){
  let obj= {};
  for(i=0; i < input.length;i++){
    const letter = input[i].toLowerCase();
    if (obj[letter] ){
      obj[letter]++
    }else{
      obj[letter]=1
    }
  }

  let countArr = Object.entries(obj)
  console.log(countArr)
  const find = countArr.find((el) => {
    if(el[1] === 1){
      return true
    }
  })
  return find[0]
}

console.log(bestNonRepeatChar('the quick brown fox jumps then quickly blow air'))



// NOTES
// how many times has this letter occur in the string ?

// where and when do I expect "this" to happen ?
// step through code and follow the computer/program instructions ---> use sample inputs to see
