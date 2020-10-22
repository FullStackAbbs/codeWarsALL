const strLenCheck = (str1,str2) => {
  return (str1.length >= str2.length) ? str1 : str2
}
console.log('test 1',strLenCheck('abbey','abbeyr'),'abbeyr')
console.log('test 2',strLenCheck('abbeyf','abbeyr'),'abbeyf')
console.log('test 3',strLenCheck('abbeyr','abbey'),'abbeyr')
// node stringLengthCheck.js
