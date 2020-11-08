// const replaceInPlace = arr => {
//   let maxNum;
//   for(let i=arr.length; i>0; i--){
//   if(i = arr.length){
//     arr[i]=-1
//     maxNum=arr[i]
//
//   }
//
//   if(arr[i]>maxNum){
//     maxNum = arr[i]
//     arr[i] = maxNum
//   }else{
//     arr[i]=maxNum
//   }
//   }
//   return arr
// }

const replaceInPlace = arr => {
  arr[arr.length-1] = -1
  let maxNum = arr[arr.length-1]
  for(let i=arr.length-2; i>=0;i--){
    let temp = arr[i]
    arr[i] = maxNum
    maxNum = Math.max(maxNum,temp)

  }
  return arr
}


console.log(replaceInPlace([17,18,5,4,6,1]), [18,6,6,6,1,-1] )
// node replaceInPlace.js
