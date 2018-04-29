(function() {
  const BASE_URL = 'https://jsonplaceholder.typicode.com';

  async function request(url) {
    let response = await fetch(`${BASE_URL}${url}`);
    return response.json();
  }

  window.request = request;
}());