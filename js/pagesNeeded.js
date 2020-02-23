// PREP
https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd/train/javascript

// LEARNING MOMENENT: Test.assertEqual allows us to check our own test. true vs is this actually true aganist my derived function
// Parameters: Pages and Students
// Return: How many pages do we need ?
// Example: 5 students 5 pages. 25 overall pages needed
// PsuedoCode: take in the students and pages

var m = 0;
var n = 0;
function blankPages(m,n){
  if(m||n <= 0){
    console.log('No papers are needed')
  } else {
    blankPagesNeeded = m*n;
    console.log('The class needs at least ${blankPagesNeeded}');
  }
}
