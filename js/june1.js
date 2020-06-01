// 5. remove Duplicate
// Question: How would you remove duplicate members from an array?
//Paramter any array of members
// Return an array with no duplicates
// Example  ['abbey','ellen','abbey','kate','ellen'], [abbey,ellen,kate]
//Psuedocode
// iterate through the input array.
// if the entry is not in the array (indexOf (elm === -1)
// we have to put the entry in the result array)
function removeDuplicate(arr){
  result=[];
  arr.forEach((el) => {
    if(result.indexOf(el) === -1){
      result.push(el)
    }
  })
  return result
}
console.log(removeDuplicate(['abbey','ellen','abbey','kate','ellen','abbey','lisa']))

// node june1.js
