var express  = require('express');

function countNegatives(arr){
  let total=[-1]
let me =arr.reverse()
me.forEach((el,i) =>


(me[i]>total[i])? total.push(me[i]) : total.push(total[i]))
total.pop()
total.reverse()
console.log(total)

}


countNegatives([17,18,5,4,6,1])

// node replaceElementGreat.js
