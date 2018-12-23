getGeolocation({
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
}).then(pos => getPlaces(pos.coords))
  .then(places => getWeather(places[0]))
  .then(weather => {
    console.log(weather);
    document.querySelector('main').innerHTML = render(weather);
  }).catch(err => {
  alert(`Can't get your position [code=${err.code}]`);
});

function render(weather) {
  return `
    <h2>Weather for ${weather.title}</h2>
    <table>
      ${weather.consolidated_weather.map(d => `
        <tr>
          <td>
            <img width="20" src="https://www.metaweather.com/static/img/weather/${d.weather_state_abbr}.svg">
          </td>
          <td>
            ${d.applicable_date}
          </td>
          <td>
            ${d.weather_state_name}
          </td>
          <td>
            ${Math.round(d.min_temp)}&deg
          </td>
          <td>
            ${Math.round(d.max_temp)}&deg
          </td>
        </tr>
      `).join('')}
    </ul>
  `;
}

function getWeather(place) {
  return fetch(`/weather/${place.woeid}`)
    .then(res => res.json());
}

function getPlaces(coords) {
  return fetch(`/location?lat=${coords.latitude}&lng=${coords.longitude}`)
    .then(res => res.json());
}

function getGeolocation(options) {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}