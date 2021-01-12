function minimumMovement(obstacleLanes) {
    // 2,1,3,2
    // [
    //     [2,inf,3]
    //     [2, 2 ,inf]
    //     [inf, 2 , 1]
    //     [1 ,inf, 1]
    //     [1,  0,  1]
    // ]




    // Write your code here
    //creating grid of car rows 
    let carRows = new Array(obstacleLanes.length)
        .fill('')
        .map(() =>
            new Array(3).fill('')
        )

    //looping over nested arrays to add obstacles 
    for (let i = 0; i < carRows.length; i++) {
        carRows[i][obstacleLanes[i] - 1] = Infinity;
    }

    //start of moves
    carRows.unshift([1, 0, 1]);

    //checking each available position and assigning it its respective number of moves
    for (let i = 1; i < carRows.length; i++) {
        for (let j = 0; j < 3; j++) {
            let nextPossibleRow = carRows[i][j]
            let prevRowPos = carRows[i - 1][j]
            if (nextPossibleRow === '' && prevRowPos === Infinity) {
                carRows[i][j] = Math.min(...carRows[i - 1]) + 1
            } else if (nextPossibleRow === '' && prevRowPos !== Infinity) {
                carRows[i][j] = carRows[i - 1][j]
            }
        }
    }
    return Math.min(...carRows[carRows.length - 1])
}