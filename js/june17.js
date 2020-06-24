// // Anagram
// // anagram('finder', 'Friend')  --> true
// anagram('hello', 'bye') --> false

// parameters: two strings
// return : a boolean (true/false)
// example: anagram('finder', 'Friend')  --> true
// anagram('hello', 'bye') --> false
//
// // notes: case sensitvity does not matter.
// psuedocode
// METHOD ONE:
// (x) lowercase
// (x) split the strings (O(1))
// (x) iterate through the first string, comparing each character of the string to
// (x) another iteration happening within to compare w/ the letters of the second string

// Big O: O(n^2)

// METHOD TWO:
// (x) lowercase
// (x) split
// (x) sort both arrays
// (x) iterate through one array while comparing both string elements

//

// METHOD THREE
// (x) build a map or an array of each character
// (x ) if the arrays are equal return true 

one string through all the characters
