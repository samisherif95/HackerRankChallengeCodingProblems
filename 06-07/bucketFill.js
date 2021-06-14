function strokesRequired(picture) {
    let matrix = picture.map(ele => ele.split(""));
    let visited = matrix.map(row => row.map(value => false));

    let count = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (!visited[row][col]) {
                let letter = matrix[row][col];
                color(row, col, letter, visited, matrix);
                count++;
            }
            visited[row][col] = true;
        }
    }

    return count;


}
function color(row, col, letter, visited, matrix) {
    let squares = [[row, col]];

    while (squares.length) {
        let node = squares.shift();
        let x = node[0];
        let y = node[1];
        visited[x][y] = true;
        let neighbors = getNeighbors(x, y, letter, visited, matrix);
        squares = squares.concat(neighbors);
    }
}

function getNeighbors(row, col, letter, visited, matrix) {
    let dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    let neighbors = [];

    for (let i = 0; i < dirs.length; i++) {
        let newX = row + dirs[i][0];
        let newY = col + dirs[i][1];
        if (newX >= 0 && newX < matrix.length && newY >= 0 && newY < matrix[0].length) {
            if (!visited[newX][newY]) {
                if (matrix[newX][newY] === letter) {
                    neighbors.push([newX, newY]);
                    visited[newX][newY] = true;
                }
            }

        }
    }

    return neighbors;


}