console.log(getAverage(JSON.parse(ANCESTRY_FILE)));

// function getAverage(list) {
//     let sum = 0, count = 0;
//     for (let i = 0; i < list.length; i++) {
//         for (let j = 0; j < list.length; j++) {
//             if (list[j].name === list[i].mother) {
//                 sum += list[i].born - list[j].born;
//                 count++;
//             }
//         }
//     }
//     return sum / count;
// }

// function getAverage(list) {
//     var sum = 0, count = 0;
//     var byName = createHash(list, 'name');

//     for (var i = 0; i < list.length; i++) {
//         var person = list[i];
//         var mother = byName[person.mother];
//         if (mother) {
//             sum += person.born - mother.born;
//             count++;
//         }
//     }
//     return sum / count;
// }

// function getAverage(list) {
//     var sum = 0, count = 0;
//     var byName = createHash(list, 'name');
//     list.forEach(person => {
//         var mother = byName[person.mother];
//         if (mother) {
//             sum += person.born - mother.born;
//             count++;
//         }
//     });
//     return sum / count;
// }

// function getAverage(list) {
//     var sum = 0, count = 0;
//     var byName = createHash(list, 'name');
//     var withMothers = list.filter(p => Boolean(byName[p.mother]));
//     withMothers.forEach(person => {
//         var mother = byName[person.mother];
//         sum += person.born - mother.born;
//         count++;
//     });
//     return sum / count;
// }

function getAverage(list) {
    var byName = createHash(list, 'name');
    var withMothers = list.filter(p => Boolean(byName[p.mother]));
    var ageDiff = p => p.born - byName[p.mother].born;
    var ageDiffs = withMothers.map(ageDiff);
    return average(ageDiffs);
}

// function average(list) {
//     var sum = 0;
//     list.forEach(value => sum += value);
//     return sum / list.length;
// }

function average(list) {
    return list.reduce((sum, value) => sum + value, 0) / list.length;
}

function createHash(list, key) {
    let hash = {};
    for (let item of list) {
        hash[item[key]] = item;
    }
    return hash;
}