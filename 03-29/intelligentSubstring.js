function getSpecialSubstring(s, k, charValue) {
    // Write your code here

    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let charType = {};

    for (let i = 0; i < alpha.length; i++) {
        let char = alpha[i]
        charType[char] = charValue[i];
    }
    debugger
    let max = 0; //3
    let startingSubString = []; //[0,1,3,4,5]
    let startIdx = 0; //3
    let last = 0; //1
    // giraffe                     
    // k = 2                         
    // 01111001111111111011111111  
    // Normal characters are in the set {a, f, g, r}. 
    for (let i = 0; i < s.length; i++) {
        let char = s[i] //r
        if (charType[char] === '0') {
            if (startingSubString.length >= k) {
                startIdx++;
            }
            startingSubString.push(last);
            last = i + 1; //6
        }
        let currLen = i - startingSubString[startIdx] + 1; //3
        if (currLen > max) max = currLen;
    }
    return max;
}