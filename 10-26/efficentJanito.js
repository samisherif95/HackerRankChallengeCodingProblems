function efficientJanitor(weight) {
    // Write your code here
    weight = weight.sort((a, b) => (a - b));
    let i = 0, j = weight.length - 1;
    let count = 0;
    while (i <= j) {
        if (weight[i] + weight[j] <= 3) {
            count++;
            i++;
            j--;
        } else if (weight[i] + weight[j] > 3) {
            j--;
            count++;
        }
    }
    return count;
}