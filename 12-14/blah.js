function groupAnagrams(words){
    let hash = {}
    for(let word of words){
        let sortedWord = word.split('').sort().join('')
        if(!hash[sortedWord]){
            hash[sortedWord] = [word]
        }else{
            hash[sortedWord].push(word)
        }
    }
    return Object.values(hash)
}