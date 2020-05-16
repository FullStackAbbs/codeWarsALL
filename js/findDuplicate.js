// https://www.codewars.com/kata/5558cc216a7a231ac9000022/train/javascript
//
// Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the returned array should appear in the order when they first appeared as duplicates.
//
// Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).
//
// Examples
// [1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]  ==>  [4, 3, 1]
// [0, 1, 2, 3, 4, 5]                ==>  []
function findDuplicate(arr){
  // get all the array numbers ok
  // sort the array numbers // 1, 1, 2, 3, 3,3,4,4,"5"
  //remove things that are not numbers
  // if its a number && the number is not in the numColl array (indexOf=-1) then add it to the numColl
  // if the number is in the numColl array (indexOf > -1) then add it to the duplicate array
  // numColl =[1,2,3,4]  dup=[1,3,3,3,4]
  // iterate thru the dup arr and if the first index is the same as the second index, remove the second .splice[i], //dup=[1,3,4]

  let numColl=[];
  let dupArr=[];
  let finDupArr=[];


  for (let i=0; i < arr.length; i++){
    if (typeof arr[i] !== "number" ){
      return 'Nope, try again'
    }
    if (arr[i] === arr[i+1]){
      dupArr.push(arr[i])
    }
  }
  for (let i=0; i < dupArr.length; i++){
    if (dupArr[i] !== dupArr[i+1]){
      finDupArr.push(dupArr[i])
    }
  }


return finDupArr
  }
console.log(findDuplicate([1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]))
// node findDuplicate.js
