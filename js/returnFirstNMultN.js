// Return the first M multiples of N : https://www.codewars.com/kata/593c9175933500f33400003e/javascript
//
// Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.
//
// Ex.
//
// multiples(3, 5.0)
// should return
//
// [5.0, 10.0, 15.0]
// Parameter m (the number of elements expected to be printed as multiples ...) and n (the number to be multiplied)
// Return m number of elements that have index's multiplied by n in an array
// Example multiples(3, 5.0)
// should return
//
// [5.0, 10.0, 15.0]
// PsuedoCode
// // the function should be: (x) an iteration where the m[i] based on the m as the length
// // should be printed when multiplied by n
// // each time the array should push this new element to a new array
function multiplies (m,n){
  let multiArr = [];
    for(let i=1; i <=m; i++){
      multiArr.push(n*i)
    }
    return multiArr
}
