// Count the number of anagrams present within an array of words
// Input array of words
// Output count of pair of anagrams
// Example [dog,fish, god, chips, ships,hipps] - 2 [love,you,met,mat]-0
// PC:
//  iterate through the array (take in a word1 )
//
function anagrams(arr){
  //

  // create an array that holds the charMap for each word
  setCharMap=[]
  arr.forEach((el)=>{
      setCharMap.push(el)
    })
  checkAnagram(setCharMap)
  function checkAnagram(arr){
    for(let i=0; i<arr.length;i++){
      let charMapA = buildCharMap(arr[i])
      for(let k=0; k<arr.length;k++){
        let charMapB = buildCharMap(arr[k])
        console.log(charMapA,charMapB)
        }

      }
    }
    // console.log(arr)
    function buildCharMap(str){
      const charMap={}
      for(let char of str.toLowerCase().sort()){
        charMap[char] = charMap[char]+1 || 1
      }
     return charMap
    }

  }


  // iterate through setCharMap aganist each other (nested loop)
  // if the arr[i] and arr[k] are the same print this is an anargram
  // add a count



  // take in a string and reutrn it charMap



//


console.log(anagrams(['dog','fish', 'god', 'chips', 'ships','hipps','god']))
// node anagrams.js
