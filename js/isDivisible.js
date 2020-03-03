// https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript

//  Is n divisible by x and y?

// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

// Examples:
// n = 3, x = 1, y = 3 => true because 3 is divisible by 1 and 3
// n = 12, x = 2, y = 6 => true because 12 is divisible by 2 and 6
// n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// n = 12, x = 7, y = 5 => false because 12 is neither divisible by 7 nor 5

// Parameters n- number to be checked x-number 1 to see if its divisible y-number 2 to see if its divisible
// Return - Boolean statement of true or false
// Example -n = 3, x = 1, y = 3 => true because 3 is divisible by 1 and 3
// n = 12, x = 2, y = 6 => true because 12 is divisible by 2 and 6
// Psuedo Code- (x) take in the numbers (x) check if the number (x AND y ) are BOTH divisible by the N number.
//             (x) if both are divisble print true (x) if either one is not divisible print false

function isDivisible(n, x, y) {
  if (n % x === 0 && n % y === 0){
  return true}
  else{
  return false}
}

Test.assertSimilar(isDivisible(3,3,4),false);
Test.assertSimilar(isDivisible(12,3,4),true);
Test.assertSimilar(isDivisible(8,3,4),false);
Test.assertSimilar(isDivisible(48,3,4),true);

// Time: 1002ms Passed: 4 Failed: 0
// Test Results:
// Test Passed: Value == 'false'
// Test Passed: Value == 'true'
// Test Passed: Value == 'false'
// Test Passed: Value == 'true'
// You have passed all of the tests! :)
