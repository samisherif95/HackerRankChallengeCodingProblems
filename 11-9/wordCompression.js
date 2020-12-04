function compressWord(word, k) {
    const stack = [];
    stack.push([word[0], 1]);
    for (let i = 1; i < word.length; i++) {
        let char = word[i];
        let top = stack[stack.length - 1] || [];
        if (top.length && top[0] === char) {
            if (top[1] === k - 1) {
                stack.pop();
            } else {
                top[1]++;
            }
        } else {
            stack.push([char, 1]);
        }
    }
    let res = '';
    for (let ele of stack) {
        res += ele[0].repeat(ele[1]);
    }
    return res;
}