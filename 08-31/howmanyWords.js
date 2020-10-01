function howMany(sentence) {
    // Write your code here
    let count = 0;
    let words = sentence.split(' ')
    for (const word of words) {
        if (wordCheck(word)) count++
    }
    return count

}

function wordCheck(word) {
    if (word.length === 0) return false
    word = word.toLowerCase();
    let alpha = 'abcdefghijklmnopqrstuvwxyz.,?!-'.split('')
    let hashAlpha = {}
    for (const char of alpha) {
        hashAlpha[char] = true
    }
    for (const char of word) {
        if (hashAlpha[char] === undefined) return false
    }
    return true
}