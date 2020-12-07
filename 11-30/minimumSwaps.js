function minimumSwaps(popularity) {
    // Write your code here

    // [4, 3, 2, 1]
    let numSwaps = 0;
    let i = 0;
    while (i < popularity.length) {
        let diff = popularity.length - popularity[i]
        if (diff === i) {
            i++
            continue
        }
        swap(popularity, diff, i)
        numSwaps++
    }
    return numSwaps
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}