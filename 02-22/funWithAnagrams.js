
function funWithAnagrams(text) {
    O(n * mlog(m)) //n is the length of text.and m is the length of each word
    // Write your code here
    // text = text.sort()
    let hash = {}
    let stack = []
    for (let i = 0; i < text.length; i++) {
        let word = text[i]
        let sorted = text[i].split('').sort().join('')
        if (!hash[sorted]) {
            hash[sorted] = true
            stack.push(word)
        }
    }
    return stack.sort()

}