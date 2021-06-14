function deleteProducts(ids, m) {
    // Write your code here
    let hashCount = {};

    for (let i = 0; i < ids.length; i++) {
        if (!hashCount[ids[i]]) hashCount[ids[i]] = 0
        hashCount[ids[i]]++
    }

    let sortedIds = Object.keys(hashCount).sort((a, b) => hashCount[a] - hashCount[b]);
    console.log(sortedIds)
    let pointer = 0;
    while (m > 0) {
        if (hashCount[sortedIds[pointer]] === 0) {
            pointer++;
        }
        hashCount[sortedIds[pointer]]--;
        m -= 1
    }

    let unique = 0;

    for (let i = 0; i < sortedIds.length; i++) {
        if (hashCount[sortedIds[i]] > 0) unique++;
    }

    return unique;

}