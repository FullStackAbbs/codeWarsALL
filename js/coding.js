// // Parameters
//
// a= [1,4,5]
// b=[3,7]
// limit = 3
//
// // Return result=[1,3,4] length of 3 = limit....
// // Example
// a= [1,4,5]
// b=[3,7]
// limit = 3

// Psuedocode:
// (x) an empty array
// (x) iterate through (demlimiter based on variable "limit")
// // (x) if arrayA[0]<arrayB[0] ... push arrayB empty result , increment array A
// // (x) if arrayA[0]> arrayB[0] ....push arrayA empty result, increment array B
// // (x) if the comparison is undefined then push the non-defined value ??

function mergeSort(arrA,arrB,limit){
  let result=[];
  let indexA=0;
  let indexB=0;
  for (let i=0;i <limit-1; i++){
    if(arrA[indexA] < arrB[indexB]){
      result.push(arrA[indexA])
      indexA++
    }
    if(arrA[indexA] > arrB[indexB]){
      result.push(arrB[indexB])
      indexB++
    }
  }
  return result
}
// cd js node coding.js
// index vs length , if equal to greater
console.log(mergeSort([1,4,5],[3,7],3))
