function FindIntersection(strArr) { 
    // charMap strArr[0]
    // charMap strArr[1]
    
    let checkMap = {}
    let output = []
    for(let num of strArr[0]){
      checkMap[num] = checkMap[num] +1|| 1
    }
    for(let num of strArr[1]){
        // if (checkMap[num] !== undefined){
        //     output.push(num)
        // }else{
            checkMap[num] = checkMap[num] +1|| 1
            // }
      }
    console.log(checkMap)
      // code goes here   
    
    }
       
    // keep this function call here 
    console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"],[1,4,13]))

    //  node findIntersection.js