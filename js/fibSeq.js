// Parameter a number
// Return print the fibinonaci seqence for the nth time
// Examples 4
// (4)
// 1+1=2 b+fib=fib b=1 fib=1 then fib=2
// 1+2=3 b+fib=fib b=1 fib=2 then fib=3
// 3+2=5 b+fib=fib fib=b=3 + fib then fib 5

// function fibonacci(n){
//   var fibo = [0, 1];
//
//   if (n <= 2) return 1;
//
//   for (var i = 2; i <=n; i++ ){
//    fibo[i] = fibo[i-1]+fibo[i-2];
//   }
//
//  return fibo[n];
// }
//
// > fibonacci(12);
//   = 144


// O(n) Linear
// function printFib(num){
//   let arr=[0,1]; // set up for the first two elements
//   if(num > 2){ // if the program DOESNT ask for the the first elements
//     for(var i=2;i <= num;i++){
//       arr[i]=arr[i-1]+arr[i-2] // add the first(n-1) element and the second(n-2) element in the array
//     }
//     return arr[num],arr
//   }else{
//     return 1
//   }
// }
// O(2^n) recursive

  function printFib(num){
    if( num<=1){
      return num
    }else{
      return printFib(num-1) + printFib(num-2)
    }
  }
  console.log(printFib(11))

// node fibSeq.js
