const subArraySum = (arr,k) => {
    const hash = new Map([[0, 1]]);
    // creates a new obj with the value 0,1 to count the occurences.
    let sum = 0;
    // intialize cumVal
    let count = 0;
    // intialize the count of subArray present that equal k
    
    for (let i = 0; i < nums.length; i++) {
        //.... as we iterate thru the nums arr
        sum += nums[i];
        // increase the cumVal by the num value
        
        if (hash.has(sum - k)) {  // check if specfic key of sum-k exist within the Map
            count += hash.get(sum - k); // if the difference is found with the map, 
            // we add the occurrence count in the map to the overall subArrCount
        }
        
        hash.set(sum, (hash.get(sum) || 0) + 1);
        // 
    }
    
    return count;

    
}

console.log(subArraySum([3,4,7,2,-3,1,4,2,1],7))

// node subArraySum.js