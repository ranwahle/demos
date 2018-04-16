function average(list) {
  return list.reduce((sum, val) => sum + val, 0) / list.length;
}

function testAverage(list, expected, error) {
  if (average(list) !== expected) {
    throw new Error(`Failed: ${error}`);
  }
}

testAverage([1, 2, 3], 2, 'Simple case');
testAverage([6, 4.5, 2.5], 4.333333333333333, 'Child ages');
testAverage([6, 4.5, 2.5, 35, 39], 17.2, 'Family ages');