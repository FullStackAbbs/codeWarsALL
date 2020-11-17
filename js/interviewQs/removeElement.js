// if arr doesnt includes val return zero
// filter through the array setting val as the removal factor
// calculate the length and return

let removeElement = function(nums, val) {
  var ans = 0;
  for(var i = nums.length; i--; ) // move occurences to the end of the array
    if (nums[i] !== val) // the number is not the value number
      ans++; // count the output
    else nums.splice(i, 1); //  if the number is equal to the value
            //remove the element
  return ans;
};

 console.log(removeElement([0,1,2,2,3,0,4,2],2), 5)
 console.log(removeElement([3,2,2,3],3), [3,2])

// node removeElement.js
