// Alphabet War : https://www.codewars.com/kata/alphabet-war
// Introduction
// There is a war and nobody knows - the alphabet war! There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.
//
// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.
//
// The left side letters and their power:
//
//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:
//
//  m - 4
//  q - 3
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.
//  Parameter string of letters but (ONLY CARE ABOUT LOWERCASE SPECFIED CHARACTER)
// Return the string "Left/Right Side Wins" Lets fight again
// Examples
// // alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!
// PsuedoCode
// seperate and or duplicate (thought about using object,prototype,new create )
// assign values for every character
// seperate every string and "check" if it has any of the values
// take the value string and replace them with values
// sum up those values
function alphabetWar (fight){
  let checkStr =fight.split('');
  let rightSide = 0;
  let leftSide = 0;
// assuming fight is only for string cases
  for(let i=0; i <= checkStr.length; i++){
    let letter = checkStr[i]
    if (letter === "m"){
      rightSide +=4;
    } else if (letter === "q"){
      rightSide+=3;
    } else if (letter === "d"){
      rightSide+=2;
    } else if (letter === "z"){
      rightSide+=1;
    }  else if (letter === "w"){
      leftSide+=4;
    }else if (letter === "p"){
      leftSide+=3;
    }else if (letter === "b"){
      leftSide+=2;
    }else if (letter === "s"){
      leftSide+=1;
    }
    }

    if (rightSide > leftSide){
      return "Right side wins !"
    } else if (rightSide < leftSide){
      return "Left side wins !"
    } else {
      return "Let's fight again !"
    }
  }
