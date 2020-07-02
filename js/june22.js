// Find the Soul Number of anyone's particular name.
// We must find Pytharegos Letter
// Soul Number is the numberical value of the vowels

// input string
// output number

// psuedocode
// take in the string of name (check)
// create new string with only vowels (edgecase 'Y') (check)
// // edgcase : if a vowel is next to it the y does not count (check)
// // replace the vowels with numerical values based
// sum the values into a its a single digit

let vowels = ['a','e','i','o','u']
function findVowels(input){
  let vowelCollection=[];

  let str =input.toLowerCase()
  for (i=0;i<str.length;i++){

    if(vowels.includes(str[i])){
      vowelCollection.push(str[i])
    }
    if(!vowels.includes(str[i+1]) && !vowels.includes(str[i-1]) && str[i] === 'y'){
      vowelCollection.push(str[i])
    }
  }
numberOutput(vowelCollection)
}



function numberOutput(input2){
  let charVal ={
    a:1,
    e:5,
    i:9,
    o:6,
    y:7
  }
  let sumArr=[]
  let
  let letters = Object.keys(charVal);
  let values = Object.values(charVal);
let filteredNumbers = letters.map((letters,values) => {
  if(l)
})


  console.log(letters,values,input2)

}
function getSumOfDigits(num) {
    var sum = 0;
    var numbers =  Math.floor(num).toString();
    for(var i = 0; i < numbers.length; i ++) {
      sum += parseInt(numbers[i]);
    }
    return(sum)
    }

console.log(findVowels('gwendelyn'))
// node june22.js
