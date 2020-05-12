Let us begin with an example:

Take a number: 56789. Rotate left, you get 67895.

Keep the first digit in place and rotate left the other digits: 68957.

Keep the first two digits in place and rotate the other ones: 68579.

Keep the first three digits and rotate left the rest: 68597. Now it is over since keeping the first four it remains only one digit which rotated is itself.

You have the following sequence of numbers:

56789 -> 67895 -> 68957 -> 68579 -> 68597

and you must return the greatest: 68957.

Task
Write function max_rot(n) which given a positive integer n returns the maximum number you got doing rotations similar to the above example.

So max_rot (or maxRot or ... depending on the language) is such as:

max_rot(56789) should return 68957

max_rot(38458215) should return 85821534

Parameter a number
Retrun the greatest out of all four renditions of the input number including the input
Example inputNum : 56789
firstNum: using the inputNum remove the first number and add it on the end : 67895
secondNum: using the firstNum, keep the first number, remove the second number and it to the end :68957
thirdNum: using the secondNum, keep the first and second number, remove the third and add it to the end

5 digit problem but with 4 go around
add to collection and sort greatest to least
Psuedocode 
// node rotate4Max.js
