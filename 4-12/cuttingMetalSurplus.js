function maxProfit(costPerCut, salePrice, lengths) {
    // Write your code here
    let maxProfit = 0
    let max = Math.max(...lengths)
    let test;
    for (let i = 1; i <= max; i++) {
        test = helper(i, costPerCut, salePrice, lengths)
        maxProfit = Math.max(maxProfit, test)
    }
    return maxProfit
}


function helper(currLength, costPerCut, salePrice, lengths) {
    let totalUniformRods = 0;
    let totalCuts = 0
    for (let i = 0; i < lengths.length; i++) {  //[20, 59, 110] - currLength =2
        let currRod = lengths[i]; //20
        if (currLength > currRod) continue
        let tempCut = 0
        let tempTotalUniformRods = 0

        if (currRod % currLength === 0) {
            tempCut = Math.floor(currRod / currLength) - 1

        } else {
            tempCut = Math.floor(currRod / currLength)
        }
        tempTotalUniformRods = Math.floor(currRod / currLength)
        if (tempTotalUniformRods * currLength * salePrice - tempCut * costPerCut > 0) {
            totalCuts += tempCut
            totalUniformRods += tempTotalUniformRods

        }
    }
    return totalUniformRods * currLength * salePrice - totalCuts * costPerCut
}
