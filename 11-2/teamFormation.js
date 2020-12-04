function countTeams(skills, minPlayers, minLevel, maxLevel) {
    let numValid = 0
    skills.forEach(skill => {
        if (skill >= minLevel && skill <= maxLevel) numValid++
    })
    let possibleTeams = 0

    for (let i = minPlayers; i <= numValid; i++) {
        const [numToChoose, total] = [i, numValid]
        const moreTeams = factorialize(total) / (factorialize(numToChoose) * factorialize(total - numToChoose))
        possibleTeams += moreTeams
    }

    return possibleTeams
}

function factorialize(num) {
    if (num < 2) return 1
    for (let i = num - 1; i >= 1; i--) num *= i
    return num;
}