function droppedRequests(requestTime) {
    // Write your code here
    // [1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 7, 11, 11, 11, 11 ] 
    const uniqueSetoftime = new Set(requestTime) //{1,2,3,4,5,6,11}
    const freqs = {}
    let dropRequests = 0

    for (let i = 0; i < requestTime.length; i++) {
        const reqTime = requestTime[i]
        if (!freqs[reqTime]) {
            freqs[reqTime] = { ones: 0, tens: 0, mins: 0 }
        }
        freqs[reqTime].ones++
        for (let j = 0; j < 60; j++) {
            const newRT = reqTime + j
            if (!uniqueSetoftime.has(newRT)) continue
            if (!freqs[newRT]) {
                freqs[newRT] = { ones: 0, tens: 0, mins: 0 }
            }
            if (j < 10) freqs[newRT].tens++
            freqs[newRT].mins++
        }
        if (freqs[reqTime].ones > 3 || freqs[reqTime].tens > 20 || freqs[reqTime].mins > 60) dropRequests++
    }
    return dropRequests

}