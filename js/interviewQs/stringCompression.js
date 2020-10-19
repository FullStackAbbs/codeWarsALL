// String Compression: Implement a method to perform basic string compression using the counts
// of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the
// "compressed" string would not become smaller than the original string, your method should return
// the original string. You can assume the string has only uppercase and lowercase letters (a - z).
//
// Psuedocode
// iterate thru String
// create a start pointer index
// create a current pointer index
// if i and i+1 are different
// set count = current - start
// char = str[i]
// push char count into the array
// start = current
// current = str[i+1]

const stringCompression = str => {
  if(str.length ===1 || typeof(str) !== 'string'){
    return str
  }else{
    let count=1
    let pointer =-1
    let char=''
    let stringCompressed=[]
    for(let i=0; i<str.length;i++){
      if (str[i] !== str[i+1]){
        count = [i] - pointer
        char = str[i]
        stringCompressed.push(char,count)
        pointer = i
      }}
      return stringCompressed.join('')
    }

  }

console.log('test 1',stringCompression('aabcccccaaa'),'a2b1c5a3')
console.log('test 2',stringCompression('a'),'a')
console.log('test 3',stringCompression('aaabbaa'),'a3b3a2')
// node stringCompression.js
