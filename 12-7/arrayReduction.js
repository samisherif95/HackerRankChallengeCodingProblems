function reductionCost(num) { //O(n^2)
    // Write your code here
    let sum = 0;
    while (num.length > 1) {
        //getiing min val1 and removing it from array
        let num1 = Math.min(...num)
        let idx1 = num.indexOf(num1)
        num.splice(idx1, 1)

        //getiing min val2 and removing it from array
        let num2 = Math.min(...num)
        let idx2 = num.indexOf(num2)
        num.splice(idx2, 1)

        //adding to sum and push new val
        sum += num1 + num2
        num.push(num1 + num2)
    }
    return sum

}
