// PREP
// Parameters : an array, an int --> size            ()
// Return : an array of arrays that have the same number of elements
// Examples :
// (a) where the size fits perfectly for array elements
// func Chunk([1,2,3,4],2) --> [[1,2],[3,4]]
// (b) where the size is smaller than the number of elements within in input array
// func Chunk([1,2,3,4,5],4) --> [[1,2,3,4],[5]]
// (c) where the size is larger than the number of elements with in input array
// func Chunk([1,2,3,4,5],7) --> [[1,2,3,4,5]]


// Psuedocode
// // func Chunk([1,2,3,4],2) --> [[1,2],[3,4]]

// create an empty array to hold our series of array (chunkArr) chunckArr=[[1,2]]
// loop through the each element within the input array (looping thru 1--> 4):
// create currentArr [1,2]

// conditional statement : checks if the length of the currentArr is filled to the SIZE CAPACITY :
// if the size capicty is same ..... push to the currentArr to chunks, currentArr(push element)
// if the size capacity is NOT the same .... element needs to pushed to the currentArr [] currentArr[3,4]

// // create a variable that stores the last element of the chunkArr ( last element) .... chunk[index] // index=length-1
// // var last=0
// // CONDITIONAL:
function chunk(arr,size){
  // create an empty array to hold our series of array (chunkArr) chunckArr=[[1,2]]
  let outputChunks=[]
  for(let element of arr){
    // loop through the each element within the input array (looping thru 1--> 4):
    // create currentArr
    let last = outputChunks[outputChunks.length-1]
    if(!last || last.length  === size ){
      outputChunks.push(element)
    }else{
      last.push(element)
    } // conditional if we are not at the last element OR the size of
    console.log(outputChunks)

    // conditional statement : checks if the length of the currentArr is filled to the SIZE CAPACITY :
    // if the size capicty is same ..... push to the currentArr to chunks, currentArr(push element)
    // if the size capacity is NOT the same .... element needs to pushed to the currentArr [] currentArr[3,4]


  }

}
// node chunks.js
console.log(chunk([1,2,3,4],2))
// console.log(chunk([1,2,3,4,5],4))
// console.log(chunk([1,2,3,4,5],7))
