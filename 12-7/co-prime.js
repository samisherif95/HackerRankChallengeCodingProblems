function coprimeCount(A) {
    let res = []
    A.forEach(val => {
        res.push(helper(val))
    })
    return res
}

function helper(val) {
    let res = val
    let factor = 2
    while (factor * factor <= val) {
        if (val % factor === 0) {
            while (val % factor === 0) {
                val /= factor
            }
            res -= (res / factor)
        }
        factor++
    }
    if (val >= 2) {
        res -= (res / val)
    }
    return res

}


//explanation link https: //cp-algorithms.com/algebra/phi-function.html