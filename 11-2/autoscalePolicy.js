function finalInstances(instances, averageUtil) {
    const halfMaxInstances = 10 ** 8
    let i = 0

    while (i < averageUtil.length) {
        const u = averageUtil[i]

        if (u < 25 && instances > 1) {
            instances = Math.ceil(instances / 2)
            i += 10
        } else if (u > 60 && instances <= halfMaxInstances) {
            instances *= 2
            i += 10
        }
        i++
    }

    return instances
}
