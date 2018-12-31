class Clocks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clocks: [
        { name: 'Tel Aviv', offset: 0, start: Date.now() },
        { name: 'London', offset: -2, start: Date.now() },
        { name: 'New York', offset: -7, start: Date.now() }
      ]
    }
  }

  reset() {
    this.setState({
      clocks: [
        { name: 'Tel Aviv', offset: 0, start: Date.now() },
        { name: 'London', offset: -2, start: Date.now() },
        { name: 'New York', offset: -7, start: Date.now() }
      ]
    })
  }

  render() {
    return React.createElement('div', {}, [
      React.createElement('button', { onClick: () => this.reset() }, 'Reset'),
      React.createElement('ul', {}, this.state.clocks.map(clock => {
        return React.createElement('li', {}, e(Clock, clock))
      }))
    ]);
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: Clock.getOffsetTime(props.start, props.offset),
      lastStart: props.start
    };
  }
  tick() {
    this.setState({ time: new Date(this.state.time.getTime() + 1000) });
  }
  static getOffsetTime(start, offset) {
    let nextTime = new Date(start);
    nextTime.setHours(nextTime.getHours() + offset);
    return nextTime;
  }
  static getDerivedStateFromProps(props, state) {
    if (state.lastStart !== props.start) {
      return {
        time: Clock.getOffsetTime(props.start, props.offset),
        lastStart: props.start
      };
    }
    return state;
  }
  start() {
    this.tick();
    this.intervalId = setInterval(() => {
      this.tick();
    }, 1000);
  }
  pause() {
    clearInterval(this.intervalId);
  }
  componentDidMount() {
    this.start();
  }
  render() {
    let time = (new Date(this.state.time)).toLocaleString();
    return React.createElement('div', {}, [
      React.createElement('span', {}, `Name: ${this.props.name}`),
      React.createElement('span', {}, `Time: ${time}`),
      React.createElement('button', { onClick: () => this.pause() }, 'Pause'),
      React.createElement('button', { onClick: () => this.start() }, 'Start'),
    ]);
  }
}


ReactDOM.render(
  React.createElement(Clocks),
  document.querySelector('main')
);