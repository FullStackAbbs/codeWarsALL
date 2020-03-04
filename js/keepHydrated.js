// https://www.codewars.com/kata/582cb0224e56e068d800003c/train/javascript

// Keep Hydrated !

// // Nathan loves cycling.
//
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
//
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
//
// For example:
//
// time = 3 ----> litres = 1
//
// time = 6.7---> litres = 3
//
// time = 11.8--> litres = 5

// Parameter h-hours Nathan has been cycling
// Return literes of water needed to stay hydrated
// Example time = 3 ----> litres = 1 time = 6.7---> litres = 3 time = 11.8--> litres = 5
// Psuedo Code 1) take in the parameter time 2)take the time para * .5 = (create a variable) 3) Round down to the closet interger  4) Return the said the value above

function litres(time) {
  rawNum=.5*time;
  litresNeeded=Math.floor(rawNum);
  return litresNeeded;
}

Test.describe('Fixed tests', _ => {
  Test.it('Tests', _ => {
    Test.assertEquals(litres(2), 1, 'should return 1 litre');
    Test.assertEquals(litres(1.4), 0, 'should return 0 litres');
    Test.assertEquals(litres(12.3), 6, 'should return 6 litres');
    Test.assertEquals(litres(0.82), 0, 'should return 0 litres');
    Test.assertEquals(litres(11.8), 5, 'should return 5 litres');
    Test.assertEquals(litres(1787), 893, 'should return 893 litres');
    Test.assertEquals(litres(0), 0, 'should return 0 litres');
  });
});

// Time: 930ms Passed: 47 Failed: 0
// Test Results:
//  Fixed tests
//  Tests (7 of 7 Assertions)
// Completed in 5ms
//  Random tests
//  Tests (40 of 40 Assertions)
// Completed in 2ms
// You have passed all of the tests! :)
