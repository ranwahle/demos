import {PRODUCTS} from './products.js';

let state = {
  products: [],
  selectedKeys: []
};

onPageLoad();

function setState(newState) {
  Object.assign(state, newState);
  render(state);
}

function render(state) {
  document.querySelector('#root').innerHTML = App(state);
}

function onPageLoad() {
  setState({products: PRODUCTS, selectedKeys: ['t_shirt', 'shoe']});
}

function App(state) {
  return `
    <main class="u-p-large">
      ${List(state.products, state.selectedKeys)}
    </main>`
}

function List(products, selectedKeys) {
  let isSelected = (p) => selectedKeys.includes(p.key);
  return `
    <ol class="List">
      ${products.map(p => `<li>${Product(p, isSelected(p))}</li>`).join('')}
    </ol>`
}

function Product(product, isSelected) {
  return `
    <div class="Product ${isSelected && 'is-selected'}">
      <span>${product.name}</span>
      <img src="img/${product.key}.png">
      <p>${product.price}</p>
    </div>
  `;
}