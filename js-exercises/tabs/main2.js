asTabs(document.querySelector('#wrapper'));

function asTabs(node) {
    let panels = Array.from(node.querySelectorAll('[data-tabname]'));
    let buttons = panels
        .map(p => `<button data-tabname="${p.dataset.tabname}">${p.dataset.tabname}</button>`)
        .join('');
    let tabs = getTabs(withTabs(node));
    tabs.innerHTML = buttons;
    tabs.addEventListener('click', tabClicked);

    hideExcept('one');

    function tabClicked(e) {
        hideExcept(e.target.dataset.tabname);
        dimExcept(e.target.dataset.tabname);
    }

    function dimExcept(tabName) {
        let buttons = Array.from(document.querySelectorAll('button'));
        buttons.forEach(dim);
        highlight(getTab(tabName));
    }

    function hideExcept(tabName) {
        panels.forEach(hide);
        show(getPanel(tabName));
    }

    function getPanel(tabName) {
        return node.querySelector(`div[data-tabname=${tabName}`);
    }

    function getTab(tabName) {
        return node.querySelector(`button[data-tabname=${tabName}`);
    }

    function getTabs(node) {
        return node.querySelector('div:first-child');
    }

    function hide(element) {
        element.style.display = 'none';
    }

    function show(element) {
        element.style.display = 'block';
    }

    function dim(element) {
        element.style.backgroundColor = 'transparent';
    }

    function highlight(element) {
        element.style.backgroundColor = 'hotpink';
    }

    function withTabs(node) {
        let tabs = document.createElement('div');
        node.insertBefore(tabs, panels[0]);
        return node;
    }
}