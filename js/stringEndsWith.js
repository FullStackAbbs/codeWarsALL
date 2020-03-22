// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d
// String ends with?
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
//
// Examples:
//
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
// Parameters: string, ending characters of string (unlimited about consider str.length = str.left + ending)
// Returns boolean: true or false/ return
// Example :solution('abc', 'bc') // returns true
// solution('abigail', 'ail') // returns true
// solution('abc', 'd') // returns false
// PsuedoCode
// // the function should compare indivdual element of the string parameters. (not needed since theres are both strings)
// // there should be a variable that take part of the string from str.length - ending[0-3 aka the length]
// LEARNING MOMENT: The substring() method returns the part of the string between the start and end indexes, or to the end of the string.
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
function solution(str, ending){
  return str.substring(str.length - ending.length) === ending;
}
