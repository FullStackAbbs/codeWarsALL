https://www.codewars.com/kata/complete-the-pattern-number-1
Task:
You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

Note:Returning the pattern is not the same as Printing the pattern.
Rules/Note:
If n < 1 then it should return "" i.e. empty string.
There are no whitespaces in the pattern.
Pattern:
1
22
333
....
.....
nnnnnn
// quick note: an iteration with a loop inside a loop. if n < 1, where n is the number of rows, it must return ""empty string
// Parameters n, the number of rows
// Reurn an output of any empty string
// Example (4)
// 1
// 22
// 333
// 4444
// Psuedo Code
// create an iteration with an iteration/
// the first iteration should make way for the line by line action
// the second iteration should print the "n" for n, numbrt of times
// iteration one: print (n), number of time
// for(var i=0; var i>=n;i++){
//   var n = outputNumber
//   return outputNumber
// }
// iteration two for(var i=0; var i >=n; i++ ){
//
// }
// you can make the second iteration a method. instead of use the iteration to repeat we can use the .repeat(index).
// i couldnt figure how else to make a new like so i concatanated \n
function pattern(n){
 let output="";
   for (let i=1; i<n; i++) {
    output += `${i}.repeat(i)\n`;
}
 return output;
}
