// // Complementary DNA : https://www.codewars.com/kata/complementary-dna
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
//
// If you want to know more http://en.wikipedia.org/wiki/DNA
//
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
//
// More similar exercise are found here http://rosalind.info/problems/list-view/ (source)
//
// DNAStrand ("ATTGC") // return "TAACG"
//
// DNAStrand ("GTAT") // return "CATA"
// Parameter : a string of only four letter A/T/G/C
// Return : a string with corresponding letter key stil T/A/C/G
// Example: DNAStrand ("ATTGC") // return "TAACG"
//
// DNAStrand ("GTAT") // return "CATA
// Psuedocode:
// // * since these data types are the same there will be no need for "data conversion"*
// // * take in the string parameter, seperate each element
// // * iterate through every element in the string
// // * print a new array (this could be done using .map ty Sam or I could use a for loop with the condition the length of string(although, I am unsure i can apply that method to that particular data type ANSWER : YES THIS IS POSSIBLE))
// // * DO NOT FORGET : you have to join elements you split !!
function DNAStrand(dna) {
  let compDNA = dna
    .split('')
    .map(string => {
      switch (string) {
        case 'G':
          return 'C'
        case 'T':
          return 'A'
        case 'C':
          return 'G'
          case 'A':
            return 'T'
      }
    })
    .join('')
  return compDNA
}
