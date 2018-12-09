let utils;

if (typeof module !== 'undefined' && typeof module.exports === 'object') {
  module.exports = {
    getAverage,
    getAncestryFullData
  };
  utils = require('../utils/utils');
}

function getAncestryFullData(callback) {
  utils.request('GET', '/ancestry', ancestry => {
    if (ancestry.length === 0) {
      callback(ancestry);
      return;
    }
    let fullData = [];
    ancestry.forEach(person => {
      utils.request('GET', `/ancestry/${person._id}`, personData => {
        fullData.push(personData);
        if (fullData.length === ancestry.length) {
          callback(fullData);
        }
      }, console.error);
    });
  }, console.error);
}

function getAverage(list) {
  let byName = utils.createHash(list, 'name');
  let withMothers = list.filter(p => Boolean(byName[p.mother]));
  let ageDiff = p => p.born - byName[p.mother].born;
  let ageDiffs = withMothers.map(ageDiff);
  return utils.average(ageDiffs);
}