var express  = require('express');


function sortAll(nums){
  let evenArr=[];
  let oddArr=[];

  nums.map(x => (x%2 === 0)? evenArr.push(x) : oddArr.push(x))
  console.log(evenArr.concat(oddArr))




}

sortAll([3,2,4,1])

// node sortArraybyParity.js
