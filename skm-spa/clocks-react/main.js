let e = React.createElement;


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
    return e('div', {}, [
      e('button', { onClick: () => this.reset() }, 'Reset'),
      e('ul', {}, this.state.clocks.map(clock => {
        return e('li', {}, e(Clock, clock))
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
    return e('div', {}, [
      e('span', {}, `Name: ${this.props.name}`),
      e('span', {}, `Time: ${time}`),
      e('button', { onClick: () => this.pause() }, 'Pause'),
      e('button', { onClick: () => this.start() }, 'Start'),
    ]);
  }
}


ReactDOM.render(
  e(Clocks),
  document.querySelector('main')
);