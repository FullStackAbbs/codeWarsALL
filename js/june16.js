var maxSubArray = function(nums) {

let arr = nums
let largestIndex=arr[0];
let secLargestIndex=arr[1];
arr.forEach((el) => {
    if (el > largestIndex){
        largestIndex = el
    }
    if(el > secLargestIndex && el < largestIndex){
        secLargestIndex = el
    }
})
    return output = largestIndex+ secLargestIndex

};

// figure out outout edgecase length solutions
// fix function call below
console.log(largeSum([1,4,9,11,-2,3]))

// lar=0 2ndlar=0
//
// node june16.js
