const removeDuplicates = nums =>{
   nums = nums.sort((a,b) => a-b)
   for(let i=0; i<nums.length;){
       if(nums[i] === nums[i+1]){
           nums.splice(i+1,1)
           i--
       }
       else{
         i++
       }
   }
    return nums.length
}


var removeDuplicates = function(nums) {
    let i = 0;

    for(let j = 0; j < nums.length; j++){
        if(nums[j] != nums[j+1]){
            nums[i++] = nums[j];
        }
    }

    return i;
};
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]),5)
// node removeDuplicate.js
