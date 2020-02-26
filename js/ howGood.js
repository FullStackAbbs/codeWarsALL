// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
//
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
//
// Return True if you're better, else False!
//
// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
//
// FUNDAMENTALS
// https://www.codewars.com/kata/5601409514fc93442500010b/javascript
// PREP
// Parameter class scores
// Return true and false
// Example my avg > class aerage TRUE my avg < class False
// PsuedoCode
// // (x) gather the class scores
// // (x) calculate the average of the array
// // (x) compare the personal average and class average
// // (x) return message based on the results above
classScore=[34,67,87,90,86];
classAvg=average(classScore);
personalAvg= 89;
if (personalAvg > classAvg){
  return true}
  elseif(personalAvg < classAvg){
    return false}
  elseif (personalAvg = classAvg){
    return "we are equals"
  }
  }
}
