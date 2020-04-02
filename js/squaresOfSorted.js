var express  = require('express');


var sortedSquares = function(A) {
  let me=A.map((x) =>
  Math.abs(x))
  me.sort((a, b) => a - b)
  let answer=me.map((el)=> Math.pow(el,2))
  return answer
};

sortedSquares([-7,-3,2,3,11])

// node squaresOfSorted.js
