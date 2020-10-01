function pilesOfBoxes(boxesInPiles) {
    // Write your code here
    let count = 0;
    boxesInPiles.sort((a, b) => b - a);
    let i = 0;
    while (i < boxesInPiles.length - 1) {
        let j = i;
        while (boxesInPiles[i] === boxesInPiles[j]) {
            j++
        }
        count += j
        i = j
    }
    return count
}


function getMax(arr) {
    arr = arr.sort((a, b) => b - a)
    let max = arr[0]
    let nextMax;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== max) {
            nextMax = arr[i]
            break;
        }
    }
    return [max, nextMax]

}