// Count the number of vowels within the string
// Parameters : a string
// Return : a int count of vowels
// Example: 'abcedefg' 3
// Psuedocdoe
// create an object for vowels
// iterate through the string
// if the current string character is included within the vowel object
// // then we must increse the counter
// complete iterate and return the counter

const vowelCount = string => {
  const vowels=['a','e','i','o','u']
  let count = 0
  for (char of string){
    if(vowels.includes(char)){
      count++
    }
  }
  return count


}

console.log('test 1', vowelCount("abracadabra"),5)

// node vowels.js
