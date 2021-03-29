function countTeams(skills, minPlayers, minLevel, maxLevel) {
    let validPlayers = skills.filter(player => player >= minLevel && player <= maxLevel);
    let numValid = validPlayers.length;
    let teamSize = validPlayers.length;
    let totalTeams = 0;
    while (teamSize >= minPlayers) {
        // nCr n = how many combinations from n can be made in size r
        totalTeams += (factorial(numValid)) / ((factorial(teamSize) * factorial(numValid - teamSize)));
        teamSize--;
    }

    function factorial(n) {
        if (n === 0) return 1;
        return n * factorial(n - 1);
    }

    return totalTeams;
}
