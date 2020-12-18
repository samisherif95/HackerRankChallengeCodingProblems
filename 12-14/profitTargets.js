function stockPairs(stocksProfit, target) {
    // Write your code here
    let stocks = new Set()
    let count = 0
    let pairs = new Set()
    for (let num of stocksProfit) {
        let diff = target - num
        if (stocks.has(diff) && !pairs.has(`${num}-${diff}`) && !pairs.has(`${diff}-${num}`)) {
            count++
            pairs.add(`${diff}-${num}`);
        }
        stocks.add(num);
    }
    return count
}
