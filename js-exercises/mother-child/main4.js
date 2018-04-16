// var data = getAncestryData();
// var result = getAverage(data);
// console.log(result);

// function getAncestryData() {
//     setTimeout(() => {
//         return JSON.parse(ANCESTRY_FILE);
//     }, 3000);
// }

setTimeout(() => {
    // do stuff after timeout
}, 1000);

getAncestryData(data => {
    var result = getAverage(data);
    console.log(result);
});

function getAncestryData(callback) {
    setTimeout(() => {
        callback(JSON.parse(ANCESTRY_FILE));
    }, 3000);
}

function getAverage(list) {
    let byName = createHash(list, 'name');

    return withMothers(list)
        .map(ageDiff)
        .reduce(average, 0)
        .toFixed(1);

    function average(sum, value, index, list) {
        if (index !== list.length - 1) {
            return sum + value;
        } else {
            return (sum + value) / list.length;
        }
    }

    function ageDiff(person) {
        return person.born - getMother(person).born;
    }

    function withMothers(list) {
        return list.filter(p => Boolean(getMother(p)));
    }

    function isDefined(value) {
        return typeof value !== 'undefined';
    }

    function getMother(person) {
        return byName[person.mother];
    }

    function createHash(list, key) {
        let hash = {};
        for (let item of list) {
            hash[item[key]] = item;
        }
        return hash;
    }
}