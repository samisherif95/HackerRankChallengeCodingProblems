function getUmbrellas(requirement, sizes) {
    // Write your code here
    //[2,4]
    //0. 1.  2.  3.  4. 
    //[0,inf,1,  inf, 1]
    const coveredDPA = new Array(requirement + 1).fill(Infinity);
    coveredDPA[0] = 0;
    for (let size of sizes) {
        for (let i = 0; i < coveredDPA.length; i++) {
            if (size <= i) {
                coveredDPA[i] = Math.min(coveredDPA[i], coveredDPA[i - size] + 1)
            }
        }
    }
    if (coveredDPA[requirement] !== Infinity) {
        return coveredDPA[requirement]
    } else {
        return -1
    }
}