// Verify a prime number?

// Parameter a number
// Return true or false
// Example 1,true. 2,false. What makes a number prime, it should not be divisible by 2, or any of the numbers before it, if the number is stored
// Psuedocode (O(n^2))  or O(n log n)
// (x) take in the number (x) check if the number is divisibly by 2 then 3 then 5 then 7 then 11 (x) if not return false within an array
// (x) iterate from 2 to i= Number and check if anything before is divisible. den return true or false
function isPrime(number){
  if(typeof number === 'number'){
    let divisior = 2;
    while( number > divisior ){
      if(number % divisior === 0 ){
        return false
      }else{
        divisior++
        return true
      }
    }
  }else{
    return "this is not a number"
  }

}
console.log(isPrime('abby'))
// node may30.js
