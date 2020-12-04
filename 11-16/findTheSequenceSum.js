function getSequenceSum(i, j, k) {
    let num = i;
    let sum = 0;
    while (num < j) {
        sum += num++;
    }
    while (num >= k) {
        sum += num--;
    }
    return sum;
}
