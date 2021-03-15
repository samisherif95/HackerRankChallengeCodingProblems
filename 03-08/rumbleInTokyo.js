function getMinimumBlows(height) {
    if (height.length < 3) return 1

    const minHit = new Array(height.length)

    let hits = 0 //1
    let currHeight = 0 //2
    for (let i = 0; i < height.length; i++) {
        let building = height[i] //3
        if (!hits || building < currHeight) hits++
        currHeight = building
        minHit[i] = hits
    }

    hits = 0 //3
    currHeight = 0
    //[6,5,4,3,4,5,4,5,6]
    for (let i = height.length - 1; i >= 0; i--) {
        let building = height[i] //3
        if (!hits || building < currHeight) hits++
        currHeight = building //4
        minHit[i] += hits
    }

    return Math.min(...minHit)
}
