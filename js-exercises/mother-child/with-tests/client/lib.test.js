let lib = require('./lib');

describe('Helpers', () => {
  describe('average', () => {
    it('should calc average', () => {
      expect(lib.average([1, 2, 3])).toBe(2);
    });
    it('should handle empty input', () => {
      expect(lib.average([])).toBe(null);
    })
  });

  describe('createHash', () => {
    it('should return a hash by provided key', () => {
      let data = [
        {name: 'AAA', born: 1900},
        {name: 'BBB', born: 2000},
      ];
      let nameHash = lib.createHash(data, 'name');
      expect(nameHash['AAA'].born).toBe(1900);
      expect(nameHash['BBB'].born).toBe(2000);

      let bornHash = lib.createHash(data, 'born');
      expect(bornHash[1900].name).toBe('AAA');
      expect(bornHash[2000].name).toBe('BBB');
    });
  });
});

describe('Ancestry logic', () => {
  describe('getAverage', () => {
    it('should return mother-child age diffs', () => {
      let data = [
        {name: 'AAA', born: 1900, mother: 'AAA_M'},
        {name: 'AAA_M', born: 1850, mother: null},
        {name: 'BBB', born: 1900, mother: 'BBB_M'},
        {name: 'BBB_M', born: 1800, mother: null}
      ];
      let result = lib.getAverage(data);
      expect(result).toBe(75);
    });
    it('should handle null input', () => {
      let data = [
        {name: 'AAA', born: 1900, mother: null},
        {name: 'AAA_M', born: 1850, mother: null},
        {name: 'BBB', born: 1900, mother: null},
        {name: 'BBB_M', born: 1800, mother: null}
      ];
      let result = lib.getAverage(data);
      expect(result).toBe(null);
    });
    it('should ignore when mother younger than child', () => {
      let data = [
        {name: 'AAA', born: 1900, mother: 'AAA_M'},
        {name: 'AAA_M', born: 1950, mother: null},
        {name: 'BBB', born: 1900, mother: 'BBB_M'},
        {name: 'BBB_M', born: 1800, mother: null}
      ];
      let result = lib.getAverage(data);
      expect(result).toBe(25);
    });
  });
});