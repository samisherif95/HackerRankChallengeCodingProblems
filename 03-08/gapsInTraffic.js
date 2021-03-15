function widestGap(n, start, finish) {
    let lanes = []
    let i = 0;
    while (i < start.length) {
        lanes.push([start[i], finish[i]])
        i++
    }
    lanes = lanes.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0]
        } else {
            return a[1] - b[1]
        }
    })
    //[[1,2],[2,2],[4,6],[8,8]]

    lanes.push([n + 1, n + 1])
    let maxFinish = 0 //2
    let maxGap = 0 //0
    let j = 0;
    while (j < lanes.length) {
        let strt = lanes[j][0] //5
        let end = lanes[j][1] //6
        if (maxFinish < strt) maxGap = Math.max(maxGap, strt - maxFinish - 1)
        maxFinish = Math.max(maxFinish, end)
        j++
    }
    return maxGap
}
