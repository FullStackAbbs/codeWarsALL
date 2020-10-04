function isPalindrome(str){
  if (typeof(str) !== 'string'){
    return 'Valid Input Please. Only accepting string characters'
  }else{
    return str.charAt(str.length-1)
  }
  }
  // check if the input is a string
  // if the input is a string : continue with function
  // if the input is NOT a string: 'Valid input are only strings'
  // a recursive function thats says:
    // if the first and last index are the same
    /// call the function again with the second index and second to last index 1,-2
    // return True
    // if the first aand last are not the same
    // return False

console.log(isPalindrome('abbey'))
console.log(isPalindrome(3))
console.log(isPalindrome({}))
console.log(isPalindrome('pierre'))
