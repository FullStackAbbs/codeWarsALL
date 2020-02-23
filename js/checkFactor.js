// https://www.codewars.com/kata/55cbc3586671f6aa070000fb
// Grasshoper Check for Factor
// This function should test if the factor is a factor of base.
// Return true if it is a factor or false if it is not.
//
// About factors
// Factors are numbers you can multiply together to get another number.
//
// 2 and 3 are factors of 6 because: 2 * 3 = 6
//
// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1
//
// Note: base is a non-negative number, factor is a positive number.
//  PREP
// Parameters: base and testFactor
// Return: true/false
// Example: base: 25 testFactor:5,3,6  true,false,false
// Psuedo Code (x) take in the two variables. base and testFactor. (x) function loop thats test if the base modulous testFactor reports zero
// (x) if it doesnt report a modulous of zero this mean divisible therefore true
var base= 25; base < 0;
var testFactor= 2;

  if(base % testFactor === 0){
    return('${testFactor} is ineed a factor of ${base} !')
  } else {
    return('${testFactor} is NOT a factor of ${base}, try another number')
  }
}
