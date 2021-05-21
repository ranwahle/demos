let state = {
  currentTime: Date.now(),
  currentFormat: 'DD/MM/Y, h:mm:ss a'
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
  setState({currentTime: Date.now()});
}

function onFormatChange(currentFormat) {
  setState({currentFormat});
}

function App(state) {
  return `
    <main style="text-align: center;">
      <h1>${Time(state.currentTime, state.currentFormat)}</h1>
      <p>${Format(state.currentFormat)}</p>
    </main>
  `;
}

function Time(currentTime, currentFormat) {
  setTimeout(() => {
    setState({currentTime: Date.now()})
  }, 1000);
  return `<time>${moment(currentTime).format(currentFormat)}</time>`;
}

function Format(currentFormat) {
  let options = [
    {value: 'dddd h:mm:ss', label: 'Friday 10:43:28'},
    {value: 'MMM Do YYYY - hh:mm:ss', label: 'May 21st 2021 - 10:34:40'},
    {value: 'DD/MM/Y, h:mm:ss a', label: '21/05/2021, 10:32:50 am'}
  ];
  return `
    <div>
      ${options.map(option => `
        <p>
          <input type="radio" onclick="onFormatChange('${option.value}')" id="${option.value}" value="${option.value}" ${option.value === currentFormat && 'checked'}>
          <label for="${option.value}">${option.label}</label>
        </p>
      `).join('')}
    </div>
  `
}