describe('Client-Server', function() {
  let server;

  beforeAll(function() {
    server = sinon.fakeServer.create();
  });
  afterAll(function() {
    server.restore();
  });

  describe('API', function() {
    it('should get messages ', function(done) {
      let results = [{ "id": 12, "comment": "Hey there" }];
      server.respondWith('GET', `/messages`, JSON.stringify(results));
      let callback = jasmine.createSpy('callback');
      request(`/messages`).then(callback).then(() => {
        expect(callback).toHaveBeenCalledWith(results);
        done();
      });
      server.respond();
    });
  });
});