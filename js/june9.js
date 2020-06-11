// Question: How would you remove duplicate members from an array?
// Parameters an array
// Return no duplicates
// PsuedoCode
// iterate through the elements (// seperate the elements)
// create an output arr for the no duplicates
// based on the T/F result of a comparison between the output arr and currently input array element
// if the indexOf the element is -1 then add it to the output array
// if it indexOf the element is greater than -1 = 0,1,2... then go the next element


// function removeDupArr(arr){
// // let output=[];
// // arr.forEach((el) =>{
// //   if(output.indexOf(el) === -1){
// //     output.push(el)
// //   }
// // })
// // return output
//
// }

function removeDupArr(arr){
  let output=[2];
  arr.forEach((el) =>{
    console.log(output.findIndex(el))

    // if(output.findIndex(el) === -1){
    //   output.push(el)
    }
  )
  return output

}
console.log(removeDupArr([5,3,2,3,4,5,1,4,78,43,23,23]))
// node june9.js
