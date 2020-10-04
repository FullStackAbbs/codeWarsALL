// Big(O)Abbs

// .sort() (n log n)
// iterations (for,.forEach,while, ? recrusion ?) (n -linear)
// insert and delete .pop() .push() .shift() .unshift() (1 -constant)

// when a method is happening with a loop WE MULTIPLYT
// when a method are sequence, we look for the largest "worst lol" term
// // Ex: O(n log n) bc  nlog(n) > n > t

// CHEAP CHEAP CHEAP - TradeOffAbbs

// (1) .sort() through the array
// (2) iterate through using a for - loop
// (3) compare the first(i) and second index(i+1)
// (4) if the comparison is equal then the remove the second index (edited)





function removeDupArr(arr){
let input =arr.sort() // n log n
let output=[]; //collection
for (i=0; i < input.length; i++){ // for Loop w O(n)
  if(input[i] !== input [i+1]){ // comparsion indexing O(1)
    output.push(input[i])  // insert O(1)
  }
} // iteration: O(n) * O(1) = O(n)
  return output
}


function removeDupArr(arr){
  let me = new Set(arr)
  output = Array.from(me)
  return output
}

console.log(removeDupArr([6,6,3,6,1,1,2,3,3,4,3,4,6,'a','b','b','abbey,','a']))
// node june11.js
