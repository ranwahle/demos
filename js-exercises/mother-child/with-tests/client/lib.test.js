let lib, sinon;
if (typeof require === 'function') {
  lib = require('./lib');
  sinon = require('sinon');
} else {
  lib = window.lib;
}

describe('Logic', () => {
  describe('average', () => {
    it('should calc average', () => {
      expect(lib.average([1, 2, 3])).toBe(2);
    });
  });
});

describe('API', () => {
  let server;
  beforeAll(() => {
    server = sinon.fakeServer.create();
  });
  afterAll(() => {
    server.restore();
  });
  describe('request', () => {
    it('should execute resolve callback', (done) => {
      let callback = jest.fn();
      let result = [{name: 'Serge'}];
      server.respondWith('GET', '/ancestry', JSON.stringify(result));
      lib.request('GET', '/ancestry', callback);
      server.respond();
      expect(callback).toHaveBeenCalledWith(result);
      done();
    });
    it('should execute reject callback', (done) => {
      let callback = jest.fn();
      server.respondWith('GET', '/ancestry', request => {
        request.error();
      });
      lib.request('GET', '/ancestry', null, callback);
      server.respond();
      expect(callback).toHaveBeenCalled();
      done();
    })
  });
});