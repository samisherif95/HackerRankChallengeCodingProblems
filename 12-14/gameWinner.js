function gameWinner(colors) {
    // Write your code here
    let wendy = 0
    let bob = 0
    for (let i = 1; i < colors.length; i++) {
        if (colors[i] === 'w' && colors[i - 1] === colors[i] && colors[i + 1] === colors[i]) {
            wendy += 1
        }
        if (colors[i] === 'b' && colors[i - 1] === colors[i] && colors[i + 1] === colors[i]) {
            bob += 1
        }
    }
    if (wendy > bob) {
        return 'wendy'
    } else {
        return 'bob'
    }

}
