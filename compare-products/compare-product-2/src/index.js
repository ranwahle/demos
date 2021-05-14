import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { PRODUCTS, toggleSelected } from './products';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

function App() {
  let [state, setState] = useState({products: PRODUCTS, selectedKeys: ['t_shirt', 'shoe']})
  return <main className="u-p-large">
      <List
        products={state.products}
        selectedKeys={state.selectedKeys}
        onClick={(key) => {
          let selectedKeys = toggleSelected(state.selectedKeys, key);
          setState({...state, selectedKeys})
        }} />
    </main>;
}

function List({products, selectedKeys, onClick}) {
  let isSelected = (p) => selectedKeys.includes(p.key);
  return <ol className="List">
      {products.map((p, i) => <li key={i}><Product product={p} isSelected={isSelected(p)} onClick={onClick} /></li>)}
    </ol>;
}

function Product({product, isSelected, onClick}) {
  return <div className={`Product ${isSelected && 'is-selected'}`} onClick={() => onClick(product.key)}>
    <span>{product.name}</span>
    <img src={`img/${product.key}.png`} />
    <p>{product.price}</p>
  </div>;
}