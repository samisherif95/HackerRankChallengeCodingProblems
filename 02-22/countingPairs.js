function countPairs(numbers, k) {

    // k=1


    // set to save the values of a where a = b - k
    // k = b-a
    const aValues = new Set()
    for (let i = 0; i < numbers.length; i++) {
        let a = numbers[i] - k
        if (aValues.has(a)) {
            continue
        } else {
            aValues.add(a)
        }
    }
    // set ={0}
    let count = 0 //2
    for (let i = 0; i < numbers.length; i++) {
        if (aValues.has(numbers[i])) {
            count++
            aValues.delete(numbers[i])
        }
    }
    return count
}