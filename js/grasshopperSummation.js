 // https://www.codewars.com/kata/55d24f55d7dd296eb9000030

 // Grasshopper-Summation
 // Summation
 // Write a program that finds the summation of every number from 1 to num. The number will always
  // be a positive integer greater than 0.

  // PREP
  // Parameters numbers, a set of numbers from 1 to whatever the user selects
  // Return the sum of the numbers
  // Example user selects 3, 1+2+3, user selects 5 1+2+3+4+5, user selects -1 huh cant help you
  // Psuedo Code (x) get userinput of number (x)create a counting array (x) sum the array and report sum
  //

 var andCounting=0;

 function Summation(userNumInput){
    var andCounting=0;
    for(var i=1; i <=userNumInput; i+1){
      andCounting += i;
    }
    return andCounting;
    // you had it correct, remember we need the return outside the loop so when it does end
    //  the next course of action is readily avaiable which will print the counting.

 }
 Summation(11)
