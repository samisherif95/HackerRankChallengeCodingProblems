function countSignals(frequencies, filterRanges) {
    // Write your code here
    let low = -Infinity
    let high = Infinity
    for (let filters of filterRanges) {
        let val1 = filters[0]
        let val2 = filters[1]
        if (val1 > low) low = val1
        if (val2 < high) high = val2
    }
    let count = 0
    for (let freq of frequencies) {
        if (freq >= low && freq <= high) count++
    }
    return count
}