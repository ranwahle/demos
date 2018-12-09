let ancestry = require('./ancestry');

describe('Ancestry logic', () => {
  describe('getAverage', () => {
    it('should return mother-child age diffs', () => {
      let data = [
        {name: 'AAA', born: 1900, mother: 'AAA_M'},
        {name: 'AAA_M', born: 1850, mother: null},
        {name: 'BBB', born: 1900, mother: 'BBB_M'},
        {name: 'BBB_M', born: 1800, mother: null}
      ];
      let result = ancestry.getAverage(data);
      expect(result).toBe(75);
    });
    it('should handle null input', () => {
      let data = [
        {name: 'AAA', born: 1900, mother: null},
        {name: 'AAA_M', born: 1850, mother: null},
        {name: 'BBB', born: 1900, mother: null},
        {name: 'BBB_M', born: 1800, mother: null}
      ];
      let result = ancestry.getAverage(data);
      expect(result).toBe(null);
    });
    it('should ignore when mother younger than child', () => {
      let data = [
        {name: 'AAA', born: 1900, mother: 'AAA_M'},
        {name: 'AAA_M', born: 1950, mother: null},
        {name: 'BBB', born: 1900, mother: 'BBB_M'},
        {name: 'BBB_M', born: 1800, mother: null}
      ];
      let result = ancestry.getAverage(data);
      expect(result).toBe(25);
    });
  });
});