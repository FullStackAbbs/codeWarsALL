// create a function that takes in a string and returns an object with each string character as a key and the amount of times that letter occurs as the value
// Exampe: input: 'Abigail' => output: { A: 1, b: 1, i: 2, g: 1, a: 1, l: 1 }
const buildCharMap = str => {
  let charMap={}
  for(let char of str){
    charMap[char] = charMap[char] + 1 || 1
  }
  return charMap
}
console.log(buildCharMap('Abigail'),{ A: 1, b: 1, i: 2, g: 1, a: 1, l: 1 } )
// node test.js
