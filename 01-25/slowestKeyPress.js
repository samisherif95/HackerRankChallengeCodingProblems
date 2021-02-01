function slowestKey(keyTimes) {
    // Write your code here
    if (keyTimes === null || keyTimes.length === 0) return null;

    let maxTime = -Infinity;
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let key;
    let prevTime = 0;

    for (let i = 0; i < keyTimes.length; i++) {
        if (keyTimes[i][1] - prevTime > maxTime) {
            maxTime = keyTimes[i][1] - prevTime;
            key = alphabet[keyTimes[i][0]];
        }
        prevTime = keyTimes[i][1];
    }
    return key;
}