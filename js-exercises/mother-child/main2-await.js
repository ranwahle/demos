main();

async function main() {
  try {
    let result = await request('GET', 'ancestry.json');
    console.log(getAverage(result));
  } catch (err) {
    console.error(err);
  }

}

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