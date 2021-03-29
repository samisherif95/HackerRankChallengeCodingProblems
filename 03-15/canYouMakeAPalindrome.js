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



// from collections import Counter
// ​
// # Total time = O(S + Q) where S is number of chars in S and Q is number of queries

// def palindromeChecker(s, startIndex, endIndex, subs):

// def palindromable(c, numSubs):
// ​
//     # This method recives a Counter(hash where key = char, value = number of times it appears) and the number of
//     # allowed substitutions
//     # It returns True / False depending on whether a palindrome can be made w / the counter w / the number of subs
//     # If the total number of characters is odd, we can have one key with odd value
//     # If even, zero.
//     # Each substitution allows us to nuke two odds

// numOdd = 0
// numEven = 0
// total = 0
// for char in c:
//     if c[char] % 2 == 0:
//         numEven += 1
//     else:
//     numOdd += 1
// total += c[char]
// if total % 2 == 0:
//     return 2 * numSubs >= numOdd
// else:
// return 2 * numSubs >= numOdd - 1
  
//   # freqs[k] = a Counter of all chars appearing in the string up to character k in s.
//   # For each character in s, we update a running frequency counter.
//   # Then we make a copy of the counter(O(1) since there are only 26 characters) and save it in freqs[]

// freqs = []
// baseCounter = Counter("")
// for k in range(len(s)):
//     baseCounter.update(s[k])
// freqs.append(baseCounter.copy())
// ​
//   # Observe that to get the frequency of chars appearing in s[x...y],
//   # we can just subtract the numbers for s[..x] from s[...y] => freqs[y] - freqs[x]
//   # This can be done in O(1) time.The "-" operation defined in the Counter class abstracts away the work
//   # of subtracting the numbers of each character type.

// def getSubfreq(x, y):
// if x == 0: return freqs[y]
// else: return freqs[y] - freqs[x - 1]
// ​
//   # For each query, as we can get the subarray frequency in O(1) time
//   # and check it for palindromicity w / acceptable subs in O(1) time
//   # This loop is O(Q) where Q is the number of queries.

//     answer = []
// for k in range(len(startIndex)):
//     x = startIndex[k]
// y = endIndex[k]
// if palindromable(getSubfreq(x, y), subs[k]):
//     answer.append("1")
// else:
// answer.append("0")

// return "".join(answer)


// print(palindromeChecker("bcba", [1, 2, 1], [3, 3, 1], [2, 0, 0]), "101")