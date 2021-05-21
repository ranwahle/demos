let state = {
  category: '',
  filter: '',
  size: {w: 640, h: 480}
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
  setState({category: 'people'});
}

function onGenerate() {
  setState({});
}

function onFilterChange(event) {
  setState({filter: event.target.value});
}

function App(state) {
  let url = `https://placeimg.com/${state.size.w}/${state.size.h}/${state.category}${state.filter && `/${state.filter}`}`;
  return `
    <main style="
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 1em;">

      <img
        style="border: 1px dashed"
        width="${state.size.w}" height="${state.size.h}"
        src="${url}" />

      <p>${url}</p>

      <div>
        <button onclick="onGenerate(event)">Generate</button>
        <input onclick="onFilterChange(event)" type="radio" ${state.filter === 'sepia' && 'checked'} value="sepia" id="sepia"><label for="sepia">Sepia</label>
        <input onclick="onFilterChange(event)" type="radio" ${state.filter === 'grayscale' && 'checked'} value="grayscale" id="grayscale"><label for="grayscale">Grayscale</label>
      </div>
    </main>
  `;
}
