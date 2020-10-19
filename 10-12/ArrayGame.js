function countMoves(numbers) {
    // Write your code here
    let min = Math.min(...numbers)
    let numOfMoves = 0
    for (let num of numbers) {
        numOfMoves += (num - min)
    }
    return numOfMoves
}
