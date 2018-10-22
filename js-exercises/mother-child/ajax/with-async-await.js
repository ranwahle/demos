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
    xhr.open(method, url);
    xhr.addEventListener('load', e => resolve(JSON.parse(e.target.responseText)));
    xhr.addEventListener('error', reject);
    xhr.send();
  });
}

// No change below
// ----------------------------

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