function numberOfCharactersEscaped(expression) {

    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    let checkIndices = []
    let bool = false
    let result = 0

    for (let i = 0; i < expression.length; i++) {
        if (expression[i] !== '#' && bool === true) {
            checkIndices.push(i)
        } else if (expression[i] === '#' && bool === false) {
            bool = true
        } else if (expression[i] === '#' && bool === true) {
            bool = false
        }
    }
    debugger
    for (let i = 0; i < expression.length; i++) {
        if (checkIndices.includes(i)) {
            if (alpha.includes(expression[i]) && expression[i - 1] === '!') result++
        }
    }
    return result

}