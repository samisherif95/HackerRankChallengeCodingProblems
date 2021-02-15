function compareStrings(s1, s2) {
    // Write your code here
    let stack1 = []
    let stack2 = []
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] === '#') {
            stack1.pop();
        } else {
            stack1.push(s1[i])
        }
    }
    for (let i = 0; i < s2.length; i++) {
        if (s2[i] === '#') {
            stack2.pop();
        } else {
            stack2.push(s2[i])
        }
    }

    return stack1.join('') === stack2.join('') ? 1 : 0

}