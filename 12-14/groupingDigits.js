function minMoves(arr) {
    // Write your code here
    debugger
    let countOf1s = 0;
    let countOf0s = 0;
    let swap1sToLeft = 0;
    let swap0sToLeft = 0;

    for (const num of arr) {
        if (num === 0) {
            countOf1s += 1;
            swap0sToLeft += countOf0s;
        } else {
            countOf0s += 1;
            swap1sToLeft += countOf1s;
        }
    }
    return Math.min(swap0sToLeft, swap1sToLeft)

}
