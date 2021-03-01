function maximumOccurringCharacter(text) {
    // Write your code here
    let max = 0
    let letter;
    text = text.split('')
    let hash = {}
    for (const char of text) {
        if (!hash[char]) hash[char] = 0
        hash[char] += 1

    }

    Object.keys(hash).forEach(key => {
        if (hash[key] > max) {
            max = hash[key]
            letter = key
        }
    })
    return letter

}