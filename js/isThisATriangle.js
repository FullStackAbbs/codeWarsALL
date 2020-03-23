// https://www.codewars.com/kata/56606694ec01347ce800001b/discuss
//
// Is this a triangle?
//
// mplement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the lengths of given length and false in any other case.
//
// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a,b,c){
var length1 = a+b
var length2 = b+c
var length3 = a+c

//conditional

if(length1 > c && length2 > a && length3 > b ){
   return true;
}else{
   return false;
}
}
