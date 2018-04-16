asTabs(document.querySelector("#wrapper"));

function asTabs(wrapper) {
  var tabs = wrapper.querySelectorAll("[data-tabname]");
  var firstTab = tabs[0];
  var menu = document.createElement("ul");
  var buttons = [];

  forEach(tabs, createMenuItem);
  forEach(tabs, hide);
  show(firstTab);

  wrapper.insertBefore(menu, firstTab);

  // Inner methods
  // -----------------------------------------
  function createMenuItem(tab) {
    var button = document.createElement("button");
    button.textContent = tab.dataset.tabname;
    button.addEventListener("click", onTabSelected.bind(button, tab, button));
    buttons.push(button);

    var menuItem = document.createElement("li");
    menuItem.appendChild(button);
    menu.appendChild(menuItem);
  }

  function onTabSelected(tab, button) {
    forEach(tabs, hide);
    forEach(buttons, resetActive);
    show(tab);
    setActive(button);
  }

  function setActive(element) {
    element.classList.add("is-active");
  }

  function resetActive(element) {
    element.classList.remove("is-active");
  }

  // Utility methods
  // ----------------------------------------
  function forEach(list, func) {
    [].forEach.call(list, func);
  }

  function hide(el) {
    el.setAttribute("hidden", "hidden");
  }

  function show(el) {
    el.removeAttribute("hidden");
  }
}
