// Complete the function so that it finds the mean of the three scores passed to it and returns the letter value associated with that grade.
//
// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
function findAvg(num1,num2,num3){
  avgArray=[''];
  avgArray.push(num1,num2,num3);
  avg=average(avgArray);
  console.log(avg)
}

function letterGrade(avg){
  findAvg()
if (avg =<100 || avg >= 90){
  console.log('This is student has a grade A average and an average score of ${avg}')
} elseif (avg < 90 || avg >= 80){
  console.log('This is student has a grade B average and an average score of ${avg}')}
  elseif (avg < 80 || avg >= 70){
    console.log('This is student has a grade C average and an average score of ${avg}')}
  elseif (avg < 70 || avg >= 60){
    console.log('This is student has a grade D average and an average score of ${avg}')}
  elseif (avg < 60 || avg >= 0){
    console.log('This is student has a grade E average and an average score of ${avg}')}
  else{
    console.log('Invalid input')
  }
}
