function maxTickets(tickets) {
    //console.log(tickets)
    let sortedArr = tickets.sort((a, b) => a - b); //[2,3,4,13]

    let res = [];
    let i = 0;
    let arr = [];
    while (i < sortedArr.length - 1) {
        if (Math.abs(sortedArr[i + 1] - sortedArr[i]) <= 1) {
            arr.push(sortedArr[i]);
            //console.log(arr) //[2,3]
            i++;
        } else {
            arr.push(sortedArr[i]);//[445]
            res.push(arr.length); //3
            i++;
            arr = [];
        }
    }
    //console.log(res)
    return Math.max(...res);
}
