function maximumSum(arr) {
    // Write your code here
    let maxHere = arr[0]    //3
    let maxSofar = arr[0]   //10
    for (let i = 1; i < arr.length; i++) {
        let num = arr[i]
        maxHere = Math.max(num, maxHere + num)
        maxSofar = Math.max(maxHere, maxSofar)
    }
    return maxSofar

}
