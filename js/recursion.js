function reverseString(str) {
  if (str === "")
    console.log(typeof "");
  else
    console.log((reverseString(str.substr(1)) + str.charAt(0))) ;
}
reverseString("hello");
// node recursion.js
 // + str.charAt(0)


 // i would have to do two things:
 // (x) remove the first character and move it to the back:
 // // // //  could go .push/.unshift or .charAt(0) always attain the first character index but need .substr(1) to attain
 // // // // the remaineder of the string
 // (x) create a new string to be placed inside the function again:
 // // // //
 // first instance:
 // (firstTask) charAt(0)  // a
 // (secondTask) substr(1) // bigail

 //second instance("bigail"):
 // (firstTask) charAt(0) // b
 // (secondTask) substr(1) // igail
