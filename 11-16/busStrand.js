
function kthPerson(k, p, q) {
    return q.map(time => forSingleQuery(k, p, time));
}

function forSingleQuery(cap, people, time) {
    let numQueued = 0;
    for (let i = 0; i < people.length; i++) {
        if (people[i] >= time) numQueued++;
        if (numQueued === cap) return i + 1;

        const peopleRemaining = people.length - i - 1;
        const peopleNeededToFill = cap - numQueued;
        if (peopleRemaining < peopleNeededToFill) return 0;
    }
}