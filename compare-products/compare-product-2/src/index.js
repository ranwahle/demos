import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { PRODUCTS } from './products';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

function App() {
  let [state, setState] = useState({products: PRODUCTS, selectedKeys: ['t_shirt', 'shoe']})
  return <main className="u-p-large">
      <List products={state.products} selectedKeys={state.selectedKeys} />
    </main>;
}

function List({products, selectedKeys}) {
  let isSelected = (p) => selectedKeys.includes(p.key);
  return <ol className="List">
      {products.map(p => <li><Product product={p} isSelected={isSelected(p)} /></li>)}
    </ol>;
}

function Product({product, isSelected}) {
  return <div className={`Product ${isSelected && 'is-selected'}`}>
    <span>{product.name}</span>
    <img src={`img/${product.key}.png`} />
    <p>{product.price}</p>
  </div>;
}
