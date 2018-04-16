var myData = JSON.parse(ANCESTRY_FILE);
var dataByKey = getMapByKey(myData, "name");

console.log(average(
  getMotherAges(
    getAncestryWithDetailsAbout(myData, "mother")
  ), 1
));


function getMotherAges (data) {
  var motherAges = [];

  for (var i = 0; i < data.length; i++) {
    motherAges.push(getMotherAge(data[i]));
  }
  return motherAges;
}

function getAncestryWithDetailsAbout (data, key) {
  var filtered = [];
  for (var i = 0; i < data.length; i++) {
    if (dataByKey[data[i][key]]) {
      filtered.push(data[i]);
    }
  }
  return filtered;
}

function getMotherAge (child) {
  var mother = dataByKey[child.mother];
  return child.born - mother.born;
}

function average (values, precision) {
  var sum = 0;
  for (var i = 0; i < values.length; i++) {
    sum += values[i];
  }
  return (sum / values.length).toFixed(precision || 3);
}

function getMapByKey (list, key) {
  var obj = {};
  for (var i = 0; i < list.length; i++) {
    obj[list[i][key]] = list[i];
  }
  return obj;
}
