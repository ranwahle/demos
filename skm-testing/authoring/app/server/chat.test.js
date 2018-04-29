let chat = require('./chat');

describe('Chat', function() {
  describe('addMessage', function() {
    it('should return a valid id', function() {
      return chat.addMessage({
        text: 'hi'
      }).then(id => {
        expect(typeof id).toBe('string');
      });
    });
    it('should validate required fields', function() {
      let addMessage = () => {
        chat.addMessage({});
      };
      expect(addMessage).toThrow();
    });
  });
});