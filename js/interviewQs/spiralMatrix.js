/*
Draw a spiral matrix.
[ 1,  2,  3, 4]
[12, 13, 14, 5]
[11, 16, 15, 6]
[10,  9,  8, 7]
1. Initialize the multidimensional array.
2. Create counter variables to track positions.
   These include counter, startCol, endCol, startRow, endRow.
3. While the startCol <= endCol AND startRow <= endRow
   - Perform loops in clockwise direction, top, right, bottom, left.
   - Increment counter within each for loop.
   - After each for loop, increment is related counter.
   - For each for loop, set the value of the multidimensional array element.

Notes:
- Increment Top & Left, Decrement Bottom & Right. Or, remember to increment
  variables beginning with "start" and decrement variables beginning with "end".

- As a sanity check, once you have the pseudo code for the top row and right column,
  the values can be inverted for the bottom row and left column.
*/

function matrix(n) {
  //Setup array.
  let arr = []; //Think of data structure as: arr[row][col]

  for (let i = 0; i < n; i++) {
    arr.push([]);
  }

  //Setup variables.
  let counter = 1;
  let startRow = 0;
  let endRow = n - 1;
  let startCol = 0;
  let endCol = n - 1;

  while (startCol <= endCol && startRow <= endRow) {
    //Top - SR
    for (let i = startCol; i <= endCol; i++) {
      arr[startRow][i] = counter++;
    }
    startRow++;

    //Right - EC
    for (let i = startRow; i <= endRow; i++) {
      arr[i][endCol] = counter++;
    }
    endCol--;

    //Bottom - ER
    for (let i = endCol; i >= startCol; i--) {
      arr[endRow][i] = counter++;
    }
    endRow--;

    //left - SC
    for (let i = endRow; i >= startRow; i--) {
      arr[i][startCol] = counter++;
    }
    startCol++;
  }

  return arr;
}

//Try it
console.log(matrix(4));
