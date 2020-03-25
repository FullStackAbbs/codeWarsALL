https://www.codewars.com/kata/area-of-a-circle

Area of a Circle

Complete the function circleArea so that it will return the area of a circle with the given radius. Round the returned number to two decimal places (except for Haskell). If the radius is not positive or not a number, return false.
area is pi r squared btw
circleArea(-1485.86);    //returns false
circleArea(0);           //returns false
circleArea(43.2673);     //returns 5881.25
circleArea(68);          //returns 14526.72
circleArea("number");    //returns false

// PREP
// Parameter radius ONLY number and greater than 0 !
// Return a number, area of a circle
// circleArea(-1485.86);    //returns false
circleArea(0);           //returns false
circleArea(43.2673);     //returns 5881.25
circleArea(68);          //returns 14526.72
circleArea("number");    //returns false

// psuedocode :
// figure out the paramter is a number and nothing else {
  // if its not a number return false
  // if it is a number take in the radius number
  areaCircle= (2*3.14*radius)
  return areaCircle
}
var circleArea = function(radius) {
  if (typeof radius === 'number'){
    let areaCircle= (2*3.14*radius)
    return areaCircle
  }else {
    return false
  }

};
var circleArea = function(radius) {
  if (typeof radius === 'number' && radius > 0){
   let areaCirc = Number((Math.PI * radius**2).toFixed(2))
    return areaCirc
  }else {
    return false
  }

}
// you have to change it back into a number
// TWO WAYS TO DO EXPONENTS: Example....
a ** b; // 32
Math.pow(a, b); // 32
// The toFixed() method converts a number into a string, keeping a specified number of decimals.
