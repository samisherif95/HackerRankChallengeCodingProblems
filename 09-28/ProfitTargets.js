function stockPairs(stocksProfit, target) {
    // Write your code here
    let sorted = stocksProfit.sort((a, b) => a - b)
    let uniqueCombos = new Set();
    let count = 0;

    let i = 0;
    let j = sorted.length - 1
    while (i < j) {
        let sum = sorted[i] + sorted[j]
        if (sum === target) {
            let str = `${sorted[i]}-${sorted[j]}`
            if (!uniqueCombos.has(str)) {
                uniqueCombos.add(str)
                count++
            }
            j--
            i++
        } else if (sum > target) {
            j--
        } else {
            i++
        }
    }

    return count;

}