function minimumMoves(arr1, arr2) {
    // Write your code here
    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
        let int1 = arr1[i];
        let int2 = arr2[i];
        count += helper(int1, int2)
    }
    return count;
}

// arr1 = [123, 543]
// arr2 = [321, 279]

function helper(int1, int2) {  //1 - 3
    let num = 0;
    while (int1 !== 0) {
        num += Math.abs(int1 % 10 - int2 % 10);
        int1 = Math.floor(int1 / 10);
        int2 = Math.floor(int2 / 10);
    }
    return num;
}
