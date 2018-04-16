/* globals addEmployee, getAll, runAction */

'use strict';

addEmployee({
    name: 'Moshe',
    type: 'Developer',
    skill: 'Debug'
});

addEmployee({
    name: 'David',
    type: 'Manager',
    skill: 'Smoke Pipe'
});

addEmployee({
    name: 'Itzik',
    type: 'CEO',
    skill: 'Play Golf'
});

let list = document.querySelector('.js-list');
let form = document.querySelector('form');

list.addEventListener('click', e => {
    let action = e.target.dataset.action;
    if (!action) {
        return;
    }
    let eItem = e.target.closest('[data-id]');
    runAction(eItem.dataset.id, action);
    trigger('render');
});

form.addEventListener('submit', e => {
    e.preventDefault();
    addEmployee(serialize(form));
    trigger('render');
});

document.addEventListener('render', function() {
    render(list, getAll());
});

trigger('render');

function serialize(form) {
    return Object.keys(form.elements)
        .filter(e => isNaN(e))
        .reduce((o, prop) => {
            o[prop] = form[prop].value;
            return o;
        }, {});
}

function trigger(eName) {
    document.dispatchEvent(new Event(eName));
}

function render(list, data) {
    list.innerHTML = 
        data.map((e) => `
            <li data-id="${e.id}">
                <dl>
                    <dt>Name<dt>
                    <dd>${e.name}<dd>
                    <dt>Skill<dt>
                    <dd>${e.skill}<dd>
                    <dt>Last check in<dt>
                    <dd>${e.lastCheckIn}<dd>
                    <dt>Actions</dt>
                    <dd>
                        <ul>
                            ${e.getActions().map((a) => `<li><button data-action="${a.id}">${a.name}</button></li>`).join('')}
                        </ul>
                    </dd>
                </dl>
            </li>
        `).join('');
}