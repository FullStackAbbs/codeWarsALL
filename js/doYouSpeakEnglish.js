// Do you speak "English"? :
// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".
//
// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.
//
// Upper or lower case letter does not matter -- "eNglisH" is also correct.
//
// Return value as boolean values, true for the string to contains "English", false for it does not.
// // PREP WRITTEN IN BINDER AT CIC
function spEng(sentence){
  //iterate through every element minus the word english
  for (var i = 0; i < sentence.length - 6; i++) {
    if (sentence.slice(i, i + 7).toLowerCase() === 'english') {
      // cut every element and see if the order is correct when lowercased
      return true;
      // action
    }
  }
  return false;
  //action
}
//REMEMBER per Ebo. S return is of course action statment but no need for string on boolean DUH !
