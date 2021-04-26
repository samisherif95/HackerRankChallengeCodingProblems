function getUniqueCharacter(s) {
    // Write your code here
    //"statistics" 
    s = s.split('')
    let map = new Map() //{s:2,t:3,a:1,i:1}
    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) map.set(s[i], 0)
        map.set(s[i], map.get(s[i]) + 1)
    }
    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === 1) return i + 1
    }
    return -1
}