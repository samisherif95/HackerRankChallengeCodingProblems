function getUniqueCharacter(s) {
    // Write your code here

    let hash = {}
    s = s.split('')
    for (const char of s) {
        if (!hash[char]) hash[char] = 0
        hash[char] += 1
    }
    let unique = []
    Object.keys(hash).forEach(key => {
        if (hash[key] === 1) unique.push(key)
    })
    for (let i = 0; i < s.length; i++) {
        if (unique.includes(s[i])) return i + 1
    }
    return -1
}