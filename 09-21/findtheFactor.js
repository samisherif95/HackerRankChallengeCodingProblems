function pthFactor(n, p) {
    // Write your code here
    let result = []
    let div = 1
    while (div * div <= n) {
        if (n % div === 0) {
            result.push(div);
            if (n / div !== div) {
                result.push(n / div);
            }

        }
        div++;
    }
    result = result.sort((a, b) => a - b)
    return result[p - 1] ? result[p - 1] : 0

}