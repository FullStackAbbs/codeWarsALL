// The goal of this exercise is
//  to convert a string to a new string where each character in the new string is "(" if that character
//  appears only once in the original string, or ")" if that character appears more than once in the
//  original string. Ignore capitalization when determining if a character is a duplicate.
//
//  is "(" if that character
//  appears only once in the original string
//
//  ")" if that character appears more than once in the
//  original string
//
//  Ignore capitalization when determining if a character is a duplicate
//
//  Parameter: string
//  Return: parathesis , the same length of orginal string, ( if seen only once  ) if seen more than once
//  Example: "din"      =>  "(((" AND "recede"   =>  "()()()"
// PsuedoCode:
//   1.accept the string. and change it to lowercase "ignore capitalization"
//   2. a loop that interates through every single character of the input string
//   3. inside that loop, when the first letter is choose, it should count how many times the first letter
//   is found in the string
//   4. if the count is 1 then push(array) or +=(string) "(" to the answer return string ""
//   5. if the count is more than 1 then push(array) or +=(string) ")" to the answer return string ""
//   6. reset the counter to 0 for the next letter

  function convertString(input){
    let answer = "";
    let lowerC = input.toLowerCase()
    for(letter of lowerC){
      let counter = 0;
      for(let i=0;i<lowerC.length;i++){
        if (letter === lowerC[i]){
          counter++
        }
      }
      if(counter === 1){
        answer += "("
      } if (counter > 1){
        answer += ")"
      }
    }
    console.log(answer) //return answer
  }
  convertString('recede')
// node converString.js
