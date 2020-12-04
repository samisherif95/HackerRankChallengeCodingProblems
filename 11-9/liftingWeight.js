function weightCapacity(weights, maxCapacity) {
    let res = 0;
    weights.sort((a, b) => a - b);
    const memo = {};
    return helper(0, 0);

    function helper(prevWeight, i) {
        if (i >= weights.length) return prevWeight;
        let key = `${prevWeight}-${i}`;
        if (key in memo) return memo[key];
        let curWeight = weights[i];
        if (prevWeight + curWeight > maxCapacity) return prevWeight;

        let option1 = helper(prevWeight + curWeight, i + 1);
        let option2 = helper(prevWeight, i + 1);
        memo[key] = Math.max(option1, option2);
        return memo[key];
    }
}
