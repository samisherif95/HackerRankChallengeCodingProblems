function getMinimumBlows(height) {
    if (height.length < 3) return 1

    const minHit = new Array(height.length)

    let hits = 0 //5
    let currHeight = 0 //1
    for (let i = 0; i < height.length; i++) { //1
        let building = height[i]
        if (!hits || building < currHeight) hits++
        currHeight = building
        minHit[i] = hits
    }
    debugger
    v
    //[6,5,4,3,4,5,4,5,6]
    hits = 0 //3
    currHeight = 0 //3
    for (let i = height.length - 1; i >= 0; i--) {//3
        let building = height[i]
        if (!hits || building < currHeight) hits++
        currHeight = building
        minHit[i] += hits
    }

    return Math.min(...minHit)
}