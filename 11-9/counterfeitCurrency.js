function countCounterfeit(serialNumber) {
    const denoms = new Set(['10', '20', '50', '100', '200', '500', '1000']);
    let value = 0;
    for (let i = 0; i < serialNumber.length; i++) {
        let note = serialNumber[i];
        if (note.length < 10 || note.length > 12) continue;
        if (!/[A-Z]/.test(note[0]) || !/[A-Z]/.test(note[1]) || !/[A-Z]/.test(note[2])) {
            continue;
        }
        if (note[0] === note[1] || note[0] === note[2] || note[1] === note[2]) continue;
        let year = note.slice(3, 7);
        if (isNaN(year) || parseInt(year) > 2019 || parseInt(year) < 1900) continue;
        if (!/[A-Z]/.test(note[note.length - 1])) continue;
        let val = note.slice(7, note.length - 1);
        if (!denoms.has(val)) continue;
        // console.log(note, val)
        value += parseInt(val);
    }
    return value;
}