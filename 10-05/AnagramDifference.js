function getMinimumDifference(a, b) {
    // Write your code here
    let result = []
    for (let i = 0; i < a.length; i++) {
        if (a[i].length !== b[i].length) result.push(-1)
        else result.push(anagram(a[i], b[i]))
    }
    return result
}
//tea

//{t:1,e:1,a:1}

//too

//{t:0,e:1,a:1,o:-1}

function anagram(word1, word2) {
    let hash = {}
    word1.split('').forEach(char => {
        if (!hash[char]) hash[char] = 0
        hash[char] += 1
    })
    word2.split('').forEach(char => {
        if (hash[char]) {
            hash[char] -= 1
        } else if (!hash[char]) {
            hash[char] = 0
        }
    })
    Object.keys(hash).forEach(char => {
        if (hash[char] < 0) {
            hash[char] = -(hash[char])
        }
    })
    return sum(Object.values(hash))
}

function sum(array) {
    return array.reduce((a, b) => a + b)
}