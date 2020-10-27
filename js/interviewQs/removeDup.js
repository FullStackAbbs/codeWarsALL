// Define a function that removes duplicates from an array of numbers and returns it as a result.
// Sort
// Iterate based on index and push to a new array

// array new set
// check if size of new set and the orginal
const distinct = arr =>{
  arr.sort()
  output=[]
  for(let i=0; i<arr.length;i++){
    if(arr[i] !== arr[i+1]){
      output.push(arr[i])
    }
  }

  let check = Array.from(new Set(arr))
  if (arr.length === check.length){
    return 'No duplicates are found'
  }
  return check
}

console.log(distinct([1]), [1]);
console.log(distinct([1,3,2]), [1,2,3]);
console.log(distinct([1,1,2]), [1,2]);

// node removeDup.js
