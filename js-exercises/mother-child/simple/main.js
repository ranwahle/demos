console.log(getAverage(JSON.parse(ANCESTRY_FILE)));

function getAverage(list) {
    let byName = createHash(list, 'name');
    let withMothers = list.filter(p => Boolean(byName[p.mother]));
    let ageDiff = p => p.born - byName[p.mother].born;
    let ageDiffs = withMothers.map(ageDiff);
    return average(ageDiffs);
}

function average(list) {
    return list.reduce((sum, value) => sum + value, 0) / list.length;
}

function createHash(list, key) {
    return list.reduce((hash, item) => {
        hash[item[key]] = item;
        return hash;
    }, {});
}