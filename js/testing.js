var express  = require('express');

let coinA = [['quarter',1996],['nickel',1996],['quarter',1993]]
let coinB = [['quarter',1995],['nickel',1996],['quarter',1993]]
let coinC = [['quarter',1995],['nickel',1996],['nickel',1993],['quarter',1993]];
let coinD = [['quarter',1994],['nickel',1996],['nickel',1993],['quarter',1993]];


// console.log(coinA[1][1])

function sameORnah([listA],[listB]){
  let quaListA =[];
  let quaListB =[];
  for (let coin of listA){
    if(coin[0] === 'quarter'){
      quaListA.push(coin)
    }
  }
  for (let coin of listB){
    if(coin[0] === 'quarter'){
      quaListB.push(coin)
    }
  }
  function comparisonQUA(){
   for(var i=0;i<quaListA.length;i++){
     if (quaListA[i][1] === quaListB[i][1]){
       console.log('true')
     }
     if (quaListA[i][1] != quaListB[i][1]){
       console.log('false')
     }
   }
  }
    comparisonQUA(quaListA,quaListB);
      // console.log(quaListA)
      // console.log(quaListB)
  }

sameORnah([coinC],[coinD])





// node testing.js
