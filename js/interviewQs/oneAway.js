// One Away: There are three types of edits that can be performed on strings: insert a character,
// remove a character, or replace a character. Given two strings, write a function to check if they are
// one edit (or zero edits) away

// Parameter two strings
// Return true and false, true based on zero to one edits, false if edits are greater than 1
// Example bale hale -> true abbey abbey-> true dog cat-> false
// Psuedocode
// if the length of the strings is greater than two // return false
// Attain the character Map for each string
// b:1 a:1 l:1 e:1   h:1 a:1 l:1 e:1 char b is not 2nd str replaced
//  a:1 l:1 e:1   h:1 a:1 l:1 e:1 char h has to added
//  a:1 l:1 e:1   h:1 a:1 l:1 e:1 char a has to deleted

// Iterate through a charMap
// editsNeeded=0
// if charMapA=charMapB // return true
//if charMapA[char] !== charMapB[char]
// //  editsNeeded + 1 =editNeeds
//


// HINTS:
// What is the relationship between the "insert character" option and the "remove character"
// option? Do these need to be two separate checks?
//
// Can you do all three checks in a single pass?
