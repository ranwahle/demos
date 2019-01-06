import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';

import Weather from '../Weather/Weather.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'offline'
    };
  }
  componentDidMount() {
    fetch('http://localhost:8000/api/status')
      .then(res => res.json())
      .then(res => {
        this.setState({status: res.status});
      })
      .catch(err => console.warn(err));
  }
  render() {
    return (
      <div className='App'>
        <h1>Hello, World!</h1>
        <p>API Status: {this.state.status}</p>
        <Weather></Weather>
      </div>
    );
  }
}

export default hot(module)(App);