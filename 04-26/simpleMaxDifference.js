

function maxDifference(array) {
    // Write your code here
    // [7, 1, 2, 5]
    let min = Math.max(...array) //1
    let profit = 0;  //4
    array.forEach(val => {
        if (val < min) {
            min = val
        } else if (val - min > profit) {
            profit = val - min
        }
    })
    // i do this for the case where the min and the val meet 
    // the profit will be 0 so we want to make sure in that case
    // it return -1
    if (profit === 0) {
        return -1
    }
    return profit

}
