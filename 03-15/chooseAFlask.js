function chooseFlask(requirements, flaskTypes, markings) {
    requirements = requirements.sort((a, b) => a - b)
    let minWaste = [Infinity, -1]
    let i = 0
    let j = 0
    while (i < flaskTypes) {
        let currWasteSum = 0
        let reqNum = 0
        let currFlaskNum = i
        while (reqNum < requirements.length && j < markings.length && markings[j][0] === currFlaskNum) {
            if (requirements[reqNum] > markings[j][1]) {
                j++
            } else {
                currWasteSum += markings[j][1] - requirements[reqNum]
                reqNum++
            }
        }
        i++
        while (j < markings.length && markings[j][0] === currFlaskNum) { j++ }
        if (reqNum !== requirements.length) continue

        if (currWasteSum < minWaste[0]) {
            minWaste[0] = currWasteSum
            minWaste[1] = currFlaskNum
        }
    }

    return minWaste[1]
}