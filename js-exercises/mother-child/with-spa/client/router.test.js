let router = require('./router');

describe('Router', function() {
  describe('getViewName', function() {
    it('should work with location hash', function() {
      expect(router.getViewName('#foo')).toBe('foo');
    });
    it('should work with full url', function() {
      expect(router.getViewName('http://foo.bar/baz?tac=toe#foo')).toBe('foo');
    });
    it('should return default view otherwise', function() {
      expect(router.getViewName('foo')).toBe(router.views.default);
    });
  });

  describe('onRouteChange', function() {
    let originalQs, main;
    beforeAll(function() {
      originalQs = document.querySelector;
      document.querySelector = () => main;
    });
    beforeEach(function() {
      main = {innerHTML: ''};
    });

    it('should execute view function', function() {
      router.views['mock'] = jest.fn();
      router.onRouteChange('mock');
      expect(router.views['mock']).toHaveBeenCalled();
    });
    it('should set main html', function() {
      let mockHTML = '<b>foo</b>';
      router.views['mock'] = function(callback) {
        callback(mockHTML);
      };
      router.onRouteChange('mock');
      expect(main.innerHTML).toBe(mockHTML);
    });
    it('should set loading state and then replace it', function(done) {
      let loadingHTML = router.views.loading();
      router.views['mock'] = function(callback) {
        setTimeout(() => {
          callback('foo');
          expect(main.innerHTML).toBe('foo');
          done();
        }, 0);
      };
      router.onRouteChange('mock');
      expect(main.innerHTML).toBe(loadingHTML);
    });

    afterAll(function() {
      document.querySelector = originalQs.bind(document);
    })
  });
});