import React from 'react';
import ReactDOM from 'react-dom';
import {useState} from 'react';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

function App() {
  let getNumber = () => Math.ceil(Math.random() * 1000);
  let [state, setState] = useState({
    num1: gewtNumber(),
    num2: getNumber()
  });
  return <main>
    <Italic colorNumber={state.num1}>Hello</Italic>
    &nbsp;
    <Bold colorNumber={state.num2}><RandomWord/></Bold>
    <p>
      <button onClick={onButtonClick}>Get another one</button>
    </p>
  </main>;

  function onButtonClick(event) {
    setState({
      num1: getNumber(),
      num2: getNumber()
    });
  }
}

function RandomWord() {
  let getNumber = () => Math.ceil(Math.random() * 100);
  let words = ['World', 'React', 'JS'];
  return words[getNumber() % 3];
}

function Italic(props) {
  let colors = ['red', 'green', 'blue'];
  let index = props.colorNumber % 3;
  return <i style={{color: colors[index]}}>
    {props.children}
  </i>;
}

function Bold(props) {
  let colors = ['gold', 'hotpink', 'white'];
  let index = props.colorNumber % 3;
  return <b style={{color: colors[index]}}>
    {props.children}
  </b>;
}