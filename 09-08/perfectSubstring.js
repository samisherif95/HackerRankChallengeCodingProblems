// does not pass all test cases due to bad time complexity
function perfectSubstring(s, k) {
    // Write your code here
    let result = [];
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length + 1; j++) {
            result.push(s.slice(i, j));
        }
    }
    let count = 0
    result.forEach(str => {
        if (countChars(str, k)) count++
    })
    return count

}
function countChars(str, k) {
    let hash = {}
    for (let i = 0; i < str.length; i++) {
        if (!hash[str[i]]) hash[str[i]] = 0
        hash[str[i]]++
    }
    return Object.values(hash).every(value => value === k)
}