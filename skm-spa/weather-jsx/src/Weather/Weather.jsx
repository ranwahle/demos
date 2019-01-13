import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

const API_URL = 'http://localhost:8000';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: {
        title: '',
        consolidated_weather: []
      }
    };
  }
  componentDidMount() {
    getGeolocation({
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }).then(position => getPlaces(position.coords))
      .then(places => getWeather(places[0]))
      .then(weather => {
        this.setState({weather});
      }).catch(err => {
        alert(`Can't get your position [code=${err.code}]`);
      });
  }
  render() {
    if (!this.state.weather.title) {
      return (
        <div>
          <i>Getting your location...</i>
        </div>
      );
    }
    return (
      <div>
        <h2>Weather for {this.state.weather.title}</h2>
        <table>
          <tbody>
            {this.state.weather.consolidated_weather.map(d =>
              <tr key={d.id} className={`Weather--${d.weather_state_abbr}`}>
                <td>
                  <img width="20" src={`https://www.metaweather.com/static/img/weather/${d.weather_state_abbr}.svg`} />
                </td>
                <td>
                  {d.applicable_date}
                </td>
                <td>
                  {d.weather_state_name}
                </td>
                <td>
                  {Math.round(d.min_temp)}&deg;
                </td>
                <td>
                  {Math.round(d.max_temp)}&deg;
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

function getWeather(place) {
  return fetch(`${API_URL}/weather/${place.woeid}`)
    .then(res => res.json());
}

function getPlaces(coords) {
  return fetch(`${API_URL}/location?lat=${coords.latitude}&lng=${coords.longitude}`)
    .then(res => res.json());
}

function getGeolocation(options) {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}

export default hot(module)(Weather);