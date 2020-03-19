// Every Friday and Saturday night, farmer counts amount of sheep returned back to his farm (sheep returned on Friday stay and don't leave for a weekend).
//
// Sheep return in groups each of the days -> you will be given two arrays with these numbers (one for Friday and one for Saturday night). Entries are always positive ints, higher than zero.
//
// Farmer knows the total amount of sheep, this is a third parameter. You need to return the amount of sheep lost (not returned to the farm) after final sheep counting on Saturday.
//
// Example 1: Input: {1, 2}, {3, 4}, 15 --> Output: 5
//
// Example 2: Input: {3, 1, 2}, {4, 5}, 21 --> Output: 6
//
// Good luck! :-)
// Parameter Friday Sheep Count, Saturday Sheep Count, Total Sheep Count
// Return The amount of sheep lost after the weekend
// Example Example 1: Input: {1, 2}, {3, 4}, 15 --> Output: 5
//
// Example 2: Input: {3, 1, 2}, {4, 5}, 21 --> Output: 6
// PsuedoCode
// (x) create counts for the sheep for each day, adding all elements of the array for EVERY SINGLE PARAMETER [fr],[sa],[total]
// (x) take the total sheep and subtract it from the number of sheep reported returned for the entire weekend
// (x) return the specfic total 
function lostSheep(friday,saturday,total){
  let a =0, b=0;
if(friday.length === 0) {
  a = 0;
} else {
   a = friday.reduce((a,b)=> a+b);
}
if(saturday.length === 0) {
  b = 0;
} else {
  b = saturday.reduce((a,b)=> a+b);
}
let c = total - (a+b);
  return c;
}
lostSheep([1],[3,4],15);
