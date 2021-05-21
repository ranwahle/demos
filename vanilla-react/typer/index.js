let state = {
  fontFamily: '',
  text: ''
};

onPageLoad();

function onPageLoad() {
  setState({fontFamily: 'sans-serif'});
}

function onKeyDown(eventObj) {
  setState({text: eventObj.target.value});
  let input = document.querySelector('input');
  input.focus();
  moveCursorToEnd(input);
}

function onFontChange(eventObj) {
  let select = eventObj.target;
  let option = select.options[select.selectedIndex];
  setState({fontFamily: option.value});
}

function setState(newState) {
  Object.assign(state, newState);
  render(state);
}

function render(state) {
  document.querySelector('#root').innerHTML = App(state);
}

function App(state) {
  return `
    ${Input(state.text)}
    ${Dropdown(state.fontFamily)}
    ${Output(state.text, state.fontFamily)}
  `;
}

function Input(text) {
  return `<input type="text" value="${text}" oninput="onKeyDown(event)">`;
}

function moveCursorToEnd(el) {
  if (typeof el.selectionStart == "number") {
      el.selectionStart = el.selectionEnd = el.value.length;
  } else if (typeof el.createTextRange != "undefined") {
      el.focus();
      var range = el.createTextRange();
      range.collapse(false);
      range.select();
  }
}

function Dropdown(fontFamily) {
  return `
    <select onchange="onFontChange(event)">
      <option value="cursive" ${fontFamily === 'cursive' && 'selected'}>Cursive</option>
      <option value="fantasy" ${fontFamily === 'fantasy' && 'selected'}>Fantasy</option>
      <option value="monospace" ${fontFamily === 'monospace' && 'selected'}>Monospace</option>
      <option value="sans-serif" ${fontFamily === 'sans-serif' && 'selected'}>Sans Serif</option>
    </select>
  `;
}

function Output(text, fontFamily) {
  return `
    <div style="font-family: ${fontFamily}; font-size: 2em; padding: 1em; margin: 1em 0; border: 1px dashed;">
      ${text}
    </div>`;
}