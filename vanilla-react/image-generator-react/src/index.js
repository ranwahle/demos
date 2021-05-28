import React, { useState } from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

function App() {

  let [state, setState] = useState({
    category: 'people',
    filter: '',
    size: {w: 640, h: 480},
    timestamp: Date.now()
  });

  return <main style={{
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '1em',
  }}>

      <Image params={state}></Image>

      <div>
        <button onClick={onGenerate}>Generate</button>
        <Filters filter={state.filter} onFilterChange={onFilterChange}></Filters>
        <Categories category={state.category} onCategoryChange={onCategoryChange}></Categories>
      </div>
    </main>;

    function onGenerate() {
      setState({...state, timestamp: Date.now()});
    }

    function onFilterChange(event) {
      setState({...state, filter: event.target.value});
    }

    function onCategoryChange(event) {
      let select = event.target;
      let option = select.options[select.selectedIndex];
      setState({...state, category: option.value});
    }
}

function Image(props) {
  let {params} = props;
  let url = `https://placeimg.com/${params.size.w}/${params.size.h}/${params.category}${params.filter && `/${params.filter}`}`;
  return <div>
    <img
      style={{border: '1px dashed'}}
      width={params.size.w} height={params.size.h}
      src={`${url}?timestamp=${params.timestamp}`} />

    <p>{url}</p>
  </div>;
}

function Filters(props) {
  let {filter, onFilterChange} = props;
  return <span>
    <input onClick={onFilterChange} type="radio" checked={filter === 'sepia'} value="sepia" id="sepia" /><label for="sepia">Sepia</label>
    <input onClick={onFilterChange} type="radio" checked={filter === 'grayscale'} value="grayscale" id="grayscale" /><label for="grayscale">Grayscale</label>
  </span>;
}

function Categories(props) {
  let {category, onCategoryChange} = props;

  let options = [
    {value: 'animals'},
    {value: 'people'},
    {value: 'nature'},
    {value: 'tech'},
    {value: 'architecture'}
  ];
  return <select onChange={onCategoryChange}>
      ${options.map(option => <option value={option.value} selected={option.value === category}>{option.value}</option>)}
    </select>;
}
