function findLIS(array) {
    // result array represents lengths of subsequence starting from specific number

    //[1,4,5,2,6]
    let result = new Array(array.length).fill(1);[1, 2, 4, 1, 1]

    for (let i = 1; i < array.length; i++) {

        for (let k = 0; k < i; k++) {

            if (array[k] < array[i]) {
                //we make result[i] the max of result of k +1 or the result of i because whichever is the
                //max we know it has to take all the values under it anyway
                result[i] = Math.max(result[k] + 1, result[i]);
            }

        }

    }

    return Math.max(...result);



}
