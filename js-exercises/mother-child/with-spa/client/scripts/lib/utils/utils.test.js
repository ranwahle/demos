let utils = require('./utils');

describe('Helpers', () => {
  describe('average', () => {
    it('should calc average', () => {
      expect(utils.average([1, 2, 3])).toBe(2);
    });
    it('should handle empty input', () => {
      expect(utils.average([])).toBe(null);
    })
  });

  describe('createHash', () => {
    it('should return a hash by provided key', () => {
      let data = [
        {name: 'AAA', born: 1900},
        {name: 'BBB', born: 2000},
      ];
      let nameHash = utils.createHash(data, 'name');
      expect(nameHash['AAA'].born).toBe(1900);
      expect(nameHash['BBB'].born).toBe(2000);

      let bornHash = utils.createHash(data, 'born');
      expect(bornHash[1900].name).toBe('AAA');
      expect(bornHash[2000].name).toBe('BBB');
    });
  });
});