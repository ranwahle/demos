request('GET', 'http://foo/ancestry.json', ancestry => {
    console.log(getAverage(ancestry));
}, console.error);

function request(method, url, success, error) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.addEventListener('load', e => success(JSON.parse(e.target.responseText)));
    xhr.addEventListener('error', error);
    xhr.send();
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