// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

// Array plus array

// I'm new to coding and now I want to get the sum of two arrays..
// actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// Parameters,Return, Readong of the Problem
// // the input is two arrays AND what is expected is the sum of array1 and sum of array 2 into a toal array sum
// Examples
// // arr1 =[2,3,4] and arr2=[3,4,5] sumArr1=[9] sumArr1=[12] sumTotalArr=[21]
// Psuedo-Code
// //  (x) make an array1 and array2
// // (x) reduce each of the arrays
// // (x) sum the array

  var arr1 =[2,3,4];
  var arr2 =[3,4,5];
  var arr1.reduce(function(accumlator,arrayElement){
    sumArr1 = arrayElement+accumlator;
  })
  var arr2.reduce(function(accumlator,arrayElement){
    sumArr2 = arrayElement+accumlator;
  })

  function (sumArr1,sumArr2){
    return total= sumArr1+sumArr2
  }
