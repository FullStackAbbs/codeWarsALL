const replaceRight = arr => {
    const arrLength = arr.length;
    if(arrLength == 1) return [-1];
    // if the arr has one element .... return [-1]
    if(arrLength == 2) return [arr[1], -1];
    // if the arr has two elelment... return the second element and -1, since the 2nd el is the only thing on the right side
    
    let max = arr[arrLength - 1];
    // assign the max value to the last el of the array
    arr[arrLength- 1] = -1;
    // make the last value -1 since there is nothing to the right of it

    for(let i = arrLength - 2; i >= 0; i--) {
        // iterating backwards from the second to last element to the very first
        const elem = arr[i];
        // assign the current pointer element
        arr[i] = Math.max(arr[i+1], max);
        // check if to see if which is greater, the max value OR the value to the right
        // whichever is larger will replace where the pointer is
        // max = 1 arr[i+1] = -1
        max = Math.max(max, elem);
        // a new max value is assigned to check if the current element or the max value to larger
    }
    return arr;

}

console.log(replaceRight([17,18,5,4,6,1]), [18,6,6,6,1,-1] )

// node replaceRight.js