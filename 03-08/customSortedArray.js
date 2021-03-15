function moves(arr) {
    // Write your code here
    let count = 0
    let evenPointer = arr.length - 1
    let oddPointer = 0
    while (oddPointer < evenPointer) {
        while (arr[oddPointer] % 2 === 0) oddPointer++
        while (arr[evenPointer] % 2 !== 0) evenPointer--
        if (oddPointer < evenPointer) {
            [arr[oddPointer], arr[evenPointer]] = [arr[evenPointer], arr[oddPointer]]
            count++
        }
        oddPointer++
        evenPointer--

    }
    return count

}