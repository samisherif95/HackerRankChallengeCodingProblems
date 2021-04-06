function degreeOfArray(arr) {
    // Write your code here
    let countHash = {} //{1:2, 2:2, 3:1}
    let firstOccurance = {} // {1:0,2:1, 3:3}
    let lastOccurance = {}//{1:4,2:2,3:3}
    let max = 0
    debugger
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]
        if (!countHash[num]) countHash[num] = 0
        countHash[num] += 1
        max = Math.max(max, countHash[num])
        if (!(num in firstOccurance)) firstOccurance[num] = i
        lastOccurance[num] = i
    }

    let minSubArrayLength = Infinity
    for (const num in countHash) {
        if (countHash[num] === max) {
            minSubArrayLength = Math.min(minSubArrayLength, lastOccurance[num] - firstOccurance[num] + 1)
        }
    }
    return minSubArrayLength

}