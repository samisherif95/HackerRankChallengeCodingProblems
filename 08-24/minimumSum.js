function minSum(num, k) {
    // Write your code here
    // did not pass  all test cases due to bad time complexity
    while (k !== 0) {
        num = num.sort((a, b) => a - b);
        let max = num.pop();
        max = Math.ceil(max / 2)
        num.push(max)
        k--
    }
    return num.reduce((a, b) => a + b)
}
