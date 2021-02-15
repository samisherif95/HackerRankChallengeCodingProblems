function reachTheEnd(grid, maxTime) {
    const visited = new Set().add('0-0')
    const dirs = [[1, 0], [-1, 0], [0, -1], [0, 1]]
    let queue = [[0, 0, 0]]
    let minTime = Infinity
    let gridLen = grid.length
    let gridWid = grid[0].length

    while (queue.length) {
        const pathNodes = []
        for (let i = 0; i < queue.length; i++) {
            const [row, col, time] = queue[i]

            if (row === gridLen - 1 && col === gridWid - 1) {
                minTime = Math.min(minTime, time)
                continue
            }

            for (let i = 0; i < dirs.length; i++) {
                let newRow = row + dirs[i][0];
                let newCol = col + dirs[i][1];
                if (validMove(newRow, newCol, gridLen, gridWid, visited, grid)) {
                    pathNodes.push([newRow, newCol, time + 1])
                }
            }
        }
        queue = pathNodes
    }

    return minTime <= maxTime ? 'Yes' : 'No'
}

function validMove(row, col, gridLen, gridWid, visited, grid) {
    if (visited.has(`${row}-${col}`)) return false
    else visited.add(`${row}-${col}`)

    if (row < gridLen && row >= 0 && col < gridWid && col >= 0) {
        if (grid[row][col] !== '#') {
            return true
        } else {
            return false
        }
    }


}