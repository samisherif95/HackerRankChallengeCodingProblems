// ['aabb', 'tacocat'] => a, aa, aab, aabb, a, abb, b, bb, b => 9

function scatterPalindrome(string) {
    let result = []
    for (let i = 0; i < string.length; i++) {
        let str = string[i];
        let count = 0                         //   j 
        for (let j = 0; j < str.length; j++) { // aabb
            let set = new Set(); //{}
            for (let k = j; k < str.length; k++) {
                if (set.has(str[k])) {
                    set.delete(str[k])
                } else {
                    set.add(str[k])
                }
                if (set.size < 2) count++
            }

        }
        result.push(count)
    }
    return result
}