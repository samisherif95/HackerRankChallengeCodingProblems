
function countPairs(numbers, k) {
    // set to save the values of a where a = b - k
    const aValues = new Set() //{0,1}
    for (let i = 0; i < numbers.length; i++) {
        let a = numbers[i] - k //
        if (aValues.has(a)) {
            continue
        } else {
            aValues.add(a)
        }
    }

    let count = 0
    for (let i = 0; i < numbers.length; i++) {
        if (aValues.has(numbers[i])) {          //{0}
            count++
            aValues.delete(numbers[i])
        }
    }
    return count
}
