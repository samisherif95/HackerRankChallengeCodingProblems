function closedPaths(number) {
    // Write your code here
    let sum = 0
    let paths = { '0': 1, '4': 1, '6': 1, '9': 1, '8': 2 }
    number = number.toString().split('')
    number.forEach(num => {
        if (paths[num]) {
            sum += parseInt(paths[num])
        }
    })
    return sum
}
