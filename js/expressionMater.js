
// https://www.codewars.com/kata/5ae62fcf252e66d44d00008e/train/javascript

// Task
// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ().
//
// Consider an Example :
// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:
//
// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.
//
// Notes
// The numbers are always positive.
// The numbers are in the range (1  ≤  a, b, c  ≤  10).
// You can use the same operation more than once.
// It's not necessary to place all the signs and brackets.
// Repetition in numbers may occur .
// You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.


// PREP
// Parameters the value a,b,c where 1  ≤  a, b, c  ≤  10
// Return the highest value of possible operations
// Examples (list all possible examples that could give us the highest value)
// Ex1. a+b+c Ex2.a*b*c Ex3.(a+b)*c Ex4. a*(b+c)

var a=1;
var b=3;
var c=9;

function expressionMatter(a,b,c){
  if(a,b,c !<= 1 || a,b,c !>= 10){
    return ("We need a valid input")}
    else{
      var ex1=a+b+c;
      var ex2=a*b*c;
      var ex3=(a+b)*c;
      var ex4=a*(b+c);
      testArray=[ex1,ex2,ex3,ex4];
      return Math.max.testArray
    }
  }

}


expressionMatter(1, 5, 9);
