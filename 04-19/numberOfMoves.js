function minMoves(n, startRow, startCol, endRow, endCol) {
    //Write your code here
    const seenPos = new Set();
    seenPos.add(`${startRow}-${startCol}`);
    let count = 0;
    const queue = [[startRow, startCol]];
    const directions = [[1, 2], [-1, 2], [1, -2], [-1, -2], [2, 1], [-2, 1], [2, -1], [-2, -1]]

    while (queue.length !== 0) {
        let len = queue.length
        for (let i = 0; i < len; i++) {
            let pos = queue.shift();
            for (let dir of directions) {
                let newRow = dir[0] + pos[0];
                let newCol = dir[1] + pos[1];
                if (newRow >= 0 && newCol >= 0 && newRow < n && newCol < n && !seenPos.has(`${newRow}-${newCol}`)) {
                    if (newRow === endRow && newCol === endCol) return count + 1;
                    queue.push([newRow, newCol]);
                    seenPos.add(`${newRow}-${newCol}`);
                }
            }
        }
        count++;
    }
    return -1;
}