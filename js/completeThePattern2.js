https://www.codewars.com/kata/55733d3ef7c43f8b0700007c
Complete The Pattern #2
Task:
You have to write a function pattern which returns the following Pattern (See Pattern & Examples) upto n number of rows.

Note: Returning the pattern is not the same as Printing the pattern.
Rules/Note:
If n < 1 then it should return "" i.e. empty singLineing.
There are no whitespaces in the pattern.
Pattern:
(n)(n-1)(n-2)...4321
(n)(n-1)(n-2)...432
(n)(n-1)(n-2)...43
(n)(n-1)(n-2)...4
...............
..............
(n)(n-1)(n-2)
(n)(n-1)
(n)
Examples:
pattern(4):

4321
432
43
4
// Parameter n
// Return a singLineing
// Examples
(n)(n-1)(n-2)...4321
(n)(n-1)(n-2)...432
(n)(n-1)(n-2)...43
(n)(n-1)(n-2)...4
// two iterations should be happen
// one iteration to create a new line and collect the output
// second iteration creates the numbers within the line to be printed and add to singLineing
function pattern(n) {
  if (n < 1) return '';
  let collectionArray = [];
  for (var i = 0; i < n; i++) {
    let singLine = ''
    for (var numPrint = n; numPrint > i; numPrint--) // -- is countdown
      singLine += numPrint
    collectionArray.push(singLine);
  }
  return arr.join('\n');
}
