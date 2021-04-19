function rollTheString(s, roll) {

    const rollTimes = new Array(s.length).fill(0); //[1,1,1]
    for (const r of roll) {
        rollTimes[r - 1] += 1;
    }
    for (let i = rollTimes.length - 2; i >= 0; i--) {
        rollTimes[i] += rollTimes[i + 1];
    }

    let rolledString = '';
    for (let i = 0; i < rollTimes.length; i++) {
        const times = rollTimes[i];
        const alphabetIndex = s[i].charCodeAt() - 97;
        const newAlphabetIndex = (alphabetIndex + times) % 26;
        rolledString += String.fromCharCode(newAlphabetIndex + 97);
    }

    return rolledString;
}
