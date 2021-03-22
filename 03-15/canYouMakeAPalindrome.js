function palindromeChecker(s, startIndex, endIndex, subs) {
    //     s = cdecd
    // startIndex =[0, 0, 0, 0]
    // endIndex = [0, 1, 2, 3]
    // subs = [0, 1, 1, 0]


    // let startEnd = []
    let i = 0;
    let resultStr = ''
    while(i < startIndex.length){
        startEnd.push([startIndex[i],endIndex[i]])
        i++
    }
    // debugger

    let j = 0;
    while (j < startIndex.length) {
        let currStart = startEnd[j][0]
        let currEnd = startEnd[j][1] + 1
        let currString = s.slice(currStart, currEnd)
        let currChangeCount = subs[j]
        let palindromeCheck = isPalindrome(currString)

        if (currString.length < 4 && currChangeCount > 0) {
            resultStr += '1'
        } else {
            while (currChangeCount > 0) {
                if (palindromeCheck === true) {
                    resultStr += '1'
                    break
                } else {
                    palindromeCheck = palindromeCheck - 2 < 2 ? true : palindromeCheck - 2
                    currChangeCount--
                }
            }
            if (palindromeCheck === true && resultStr.length - 1 !== j) resultStr += '1'
            if (resultStr.length - 1 !== j) resultStr += '0'
        }
        j++
    }

    return resultStr


}


function isPalindrome(str) {
    str = str.split('')
    let set = new Set()
    for (let char of str) {
        if (set.has(char)) {  
            set.delete(char)
        } else {
            set.add(char)
        }
    }
    if (set.size < 2) return true
    return set.size
}
