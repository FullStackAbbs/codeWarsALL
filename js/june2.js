// 7. swap number without temp
// Question: How would you swap two numbers without using a temporary variable?
// // Parameters two numbers
// // Return swap variables of numbers
// // Example MINUS PLUS MINUS
// // b=10 a=2
// // b = b-a (10-2 , b=8) ()
// // a = a + b (2+8, a=10)
// // b = a-b (10-9 , b=2)
// // b=2, a=10
//
// // b=10 a=2
// // b = b+a (10+2=12 b=12)
// // a = a-b (2-12 = -10=a*1)
// // b= a+b (-10+12=2, b=2)
// //b
}
function swapNumb(a, b){
  console.log('before swap: ','a: ', a, 'b: ', b);
  b = b -a;
  a = a+ b;
  b = a-b;
  console.log('after swap: ','a: ', a, 'b: ', b);
}

// node june2.js
