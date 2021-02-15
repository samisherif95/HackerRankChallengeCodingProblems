function numPlayers(k, scores) {
    //[100, 100, 50, 25]  k = 3
    let sortedScores = scores.sort((a, b) => b - a);
    let ranks = new Array(sortedScores.length).fill(0); //[1,1,0,0]
    ranks[0] = 1;

    let pos = 2; //4
    for (let i = 1; i < sortedScores.length; i++) {
        if (sortedScores[i] === sortedScores[i - 1]) {
            ranks[i] = ranks[i - 1];
        } else {
            ranks[i] = pos;
        }
        pos++;
    }

    let count = 0;
    for (let i = 0; i < ranks.length; i++) {
        if (ranks[i] <= k) {
            if (sortedScores[i] > 0) count++;
        }
    }

    return count;

}