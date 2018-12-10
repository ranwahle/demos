'use strict';

class Counters extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return React.createElement('ul', {}, [
      React.createElement('li', {}, React.createElement(Counter, {start: 10})),
      React.createElement('li', {}, React.createElement(Counter, {start: 20})),
      React.createElement('li', {}, React.createElement(Counter, {start: 30}))
    ]);
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: props.start
    };
  }
  add() {
    this.setState({num: this.state.num + 1});
  }
  substract() {
    this.setState({num: this.state.num - 1});
  }
  render() {
    return React.createElement('div', {}, [
      React.createElement('span', {}, this.state.num),
      React.createElement('button', {onClick: () => this.add()}, 'Add'),
      React.createElement('button', {onClick: () => this.substract()}, 'Substract')
    ]);
  }
}

ReactDOM.render(
  React.createElement(Counters),
  document.querySelector('main')
);