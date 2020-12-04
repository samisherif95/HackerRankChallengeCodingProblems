function twins(a, b) {
    return [...Array(a.length).keys()].map(i => forSingleCase(a[i], b[i]));
}

function forSingleCase(str1, str2) {
    if (str2.length !== str1.length) return "No";
    const evenFreqs = {};
    const oddFreqs = {};

    for (let i = 0; i < str1.length; i++) {
        if (i % 2 === 0) {
            updateFreqs(evenFreqs, str1[i], str2[i]);
        } else {
            updateFreqs(oddFreqs, str1[i], str2[i]);
        }
    }
    return areAllFreqsZero(evenFreqs, oddFreqs) ? "Yes" : "No";
}

function updateFreqs(freqHash, char1, char2) {
    if (char1 in freqHash) {
        freqHash[char1]++;
    } else {
        freqHash[char1] = 1;
    }
    if (char2 in freqHash) {
        freqHash[char2]--;
    } else {
        freqHash[char2] = -1;
    }
}

function areAllFreqsZero(evenFreqs, oddFreqs) {
    const allFreqs = Object.values(evenFreqs).concat(Object.values(oddFreqs));
    for (const freq of allFreqs) {
        if (freq !== 0) return false;
    }
    return true;
}