function checkIfExist(arr){
  if (Array.isArray(arr) !== true || arr.length < 2){
    return false
  }
  const diffMap = buildDiffMap(arr)
  return diffMap


  function buildDiffMap(arr){
    let diffMap={}
    for(let num of arr){
      if(diffMap[num] !== undefined){
        return true
      }
      diffMap[(num/2)] = num
      diffMap[(num*2)] = num
    }
    return false
  }
}




    // if its not an arr
    // check if there are at least two elements
    // createHalfHashMap()
    // // iterate through the arr
    // // the value to every key will be the half value
    // checkMapDifference()
    // iterate through the arr and check if any of the values are present in the hashmap
    // if present return true

console.log(checkIfExist([7]),false)
console.log(checkIfExist(23),false)


console.log(checkIfExist([7,14,1,11]),true)
console.log(checkIfExist([-16,-13,8]),false)

console.log(checkIfExist([-2,0,10,-19,4,6,-8]),false)


// node checkIfNDoubles.js
