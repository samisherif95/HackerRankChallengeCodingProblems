
function efficientJanitor(weight) {
    // Write your code here
    //.         j   i.    
    // [1.01,1.01,1.5,1.99, 2.5]
    weight = weight.sort((a, b) => (a - b));
    let i = 0, j = weight.length - 1;
    let count = 0; //3
    while (i <= j) {
        if (weight[i] + weight[j] > 3) {
            j--;
            count++;
        } else if (weight[i] + weight[j] <= 3) {
            count++;
            i++;
            j--;

        }
    }
    return count;
}
