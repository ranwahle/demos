let Chat = {
  addMessage(message) {
    if (!message.text) {
      throw new Error(`Can't add empty message`);
    }
    let id = String(Math.floor(Math.random() * 10000));
    return Promise.resolve(id);
  },
  deleteMessage(id) {

  }
}

module.exports = Chat;