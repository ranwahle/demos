// 1. call request
// 2. create and return promise
// 3. register then() and catch() callbacks
// 4. empty stack => CPU idle
// ...
// 5. browser fetches next async task from queue and executes it in BG
// ...
// 6. HTTP response.
// 7. xhr.addEventListener('load/error')
// 8. call resolve/reject
// 9. call then/catch handlers

request('GET', 'ancestry.json')
    .then(ancestry => {
        console.log(getAverage(ancestry));
    })
    .catch(console.error);

function request(method, url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'ancestry.json');
    xhr.addEventListener('load', e => resolve(JSON.parse(e.target.responseText)));
    xhr.addEventListener('error', reject);
    xhr.send();
  });
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