// node makingAnagrams.js
// Paramters two strings
// Return number of deletions to make string anagrams of each other
// Ex s1 = abc s2- amnop
// s1 and s1 have A in common
// bc would need to be remove 2
// mnop would need to ne remove 4
// Psuedocode
// build a charMap for each strings
// check what characters and their value are not in stringA
 // // if so add the value of the char to the deletion count
// check what chacrters and their value are not in stringB
// // if so add the value of the to the deltion count
// return the deltion count
//
// Example Stacy Sully
// str1 stacy str2 Sully
// larger stacy --> {s:0 t:1 a:1 c:1 y:0}
// counter = 2 (similar letter/char )




const createCharMap = str => {
    const charMap = {};
    for(let char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}
const makingAnagrams = (str1, str2) => {
    const larger = str1.length >= str2.length ? str1 : str2;
    const smaller = str1.length < str2.length ? str1 : str2;
    const charMap = createCharMap(larger);
    let counter = 0;
    for(let char of smaller) { //    Y
        if(charMap[char] && charMap[char] > 0) {
            charMap[char]--;
            counter++;
        }
    }
    const diffOfSmaller = (smaller.length - counter); // 5 - 2 = 3 ull
    const diffOfLarger = (larger.length - counter); // 5 - 2 = 3 tac
    return diffOfSmaller + diffOfLarger; // 6
}
// node makingAnagrams.js
