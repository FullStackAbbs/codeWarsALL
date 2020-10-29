// Create a function that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.
//
// Examples
// removeABC("This might be a bit hard") ➞ "This might e  it hrd"
//
// removeABC("hello world!") ➞ null
//
// removeABC("") ➞ null
// Parameters a string or empty
// Return the string with a b c and null
// Example above
// Pscuedocode
// way 1
// use the filter method
// the characters in a series

//way2
// iterate through the string
// if the character is included in the a-c array
// str[i] make undefined
// splice which remove the index for one element

// node removeABC.js
const removeABC = str => {
  if(str.length === 0){
    return null
  }

for (let i=0; i<str.length; i++){
  const letter = ['a','b','c']
  if(['a'])
}
}
console.log('test1',removeABC("This might be a bit hard"), "This might e  it hrd")
console.log('test2',removeABC("hello world!"), null)
console.log('test3',removeABC(""), null)
