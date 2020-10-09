function priceCheck(products, productPrices, productSold, soldPrice) {
    // Write your code here
    let errors = 0;
    let hash = {};

    for (let i = 0; i < products.length; i++) {
        hash[products[i]] = productPrices[i]
    }

    for (let i = 0; i < productSold.length; i++) {
        if (hash[productSold[i]] !== soldPrice[i]) {
            errors++
        }
    }

    return errors

}