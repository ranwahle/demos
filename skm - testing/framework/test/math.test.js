describe('Math', function() {
  describe('average', function() {
    it('should work with integers', function() {
      expect(average([1, 2, 3])).toBe(2);
    });
    it('should work with floats', function() {
      expect(average([1.5, 2.5, 3.5])).toBe(2.5);
    })
  });
  describe('sum', function() {
    it('should sum integers', function() {
      expect(sum(1, 2)).toBe(3);
    });
  });
});