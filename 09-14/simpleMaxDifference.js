function maxDifference(array) {
    // Write your code here
    let min = Math.max(...array) //7
    let profit = -1;   //4
    array.forEach(val => {
        7
        if (val < min) {
            min = val    //min =1
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