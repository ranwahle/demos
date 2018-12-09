let ancestryAverage = function(callback) {
  getAncestryFullData(ancestry => {
    callback(`
      <p>${getAverage(ancestry)}</p>
    `);
  });
};