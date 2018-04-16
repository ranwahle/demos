describe('request', function() {
  it('should call the send method', function() {
    window.XMLHttpRequest = class {
      addEventListener() {}
      open() {}
      send() {}
    };
    spyOn(window.XMLHttpRequest.prototype, 'send');
    request('/foo');
    expect(window.XMLHttpRequest.prototype.send).toHaveBeenCalled();
  })
});

function request(url) {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', e => {
      if (e.target.status > 200) {
        reject(e.target.statusText);
        return;
      }
      try {
        let data = JSON.parse(e.target.responseText);
        resolve(data);
      } catch (err) {
        reject(err.message);
      }
    });

    xhr.addEventListener('error', e => reject(e.target.statusText || 'Network Error'));
    xhr.addEventListener('abort', e => reject(e.target.statusText || 'Network Error'));
    xhr.send();
  });
}