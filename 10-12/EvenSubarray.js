//not the optimal solution
function evenSubarray(numbers, k) {
    // Write your code here
    let result = {}
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length + 1; j++) {
            if (!result[numbers.slice(i, j)]) {
                result[numbers.slice(i, j)] = true;
            }
        }
    }

    let count = 0
    Object.keys(result).forEach(subArr => {
        if (countOdd(subArr, k)) {
            count++
        }
    })
    return count
}
function countOdd(subArr, k) {
    let count = 0;
    subArr = subArr.split(',')
    for (let i = 0; i < subArr.length; i++) {
        let num = subArr[i]
        if (num % 2 !== 0) {
            count++
        }
    }
    return count <= k ? true : false

}