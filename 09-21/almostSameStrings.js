function areAlmostEquivalent(s, t) {
    // Write your code here
    let result = []
    for (let i = 0; i < s.length; i++) {
        if (helper(s[i], t[i])) {
            result.push('YES')
        } else {
            result.push('NO')
        }
    }
    return result
}

function helper(str1, str2) {
    if (str1.length !== str2.length) return false
    let hash = {}
    for (let i = 0; i < str1.length; i++) {
        if (!hash[str1[i]]) {
            hash[str1[i]] = 0
        }
        hash[str1[i]] += 1
    }
    for (let i = 0; i < str2.length; i++) {
        if (!hash[str2[i]]) {
            hash[str2[i]] = 0
        } else {
            hash[str2[i]] -= 1
        }

    }
    return Object.values(hash).every(val => Math.abs(val) <= 3)
}