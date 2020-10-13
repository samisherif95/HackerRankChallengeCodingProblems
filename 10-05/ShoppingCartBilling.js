
function findLowestPrice(products, discounts) {
    const discountMap = createDiscountMap(discounts)
    let total = 0
    let t2 = 0

    for (let i = 0; i < products.length; i++) {
        const price = parseInt(products[i][0])
        t2 += price
        let best = price
        for (let j = 1; j < products[i].length; j++) {
            const newPrice = calcDiscountPrice(discountMap, products[i][j], price)
            best = Math.min(best, newPrice)
        }
        total += best
    }

    return total
}

const calcDiscountPrice = (discountMap, name, originalPrice) => {
    if (discountMap[name] === undefined) return originalPrice

    switch (discountMap[name].type) {
        case 0:
            return discountMap[name].val

        case 1:
            return Math.round(originalPrice - (originalPrice * (discountMap[name].val / 100)))

        case 2:
            return Math.round(originalPrice - discountMap[name].val)

        default:
            return originalPrice
    }
}

const createDiscountMap = (arr) => {
    const map = {}
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i]
        map[item[0]] = { type: parseInt(item[1]), val: parseInt(item[2]) }
    }
    return map
}