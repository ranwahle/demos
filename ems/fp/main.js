'use strict';

(function (EMS, Handlebars) {

    EMS.addEmployee({
        name: 'Serge Krul',
        skill: 'HTML, CSS, JS',
        type: 'Teacher'
    });
    EMS.addEmployee({
        name: 'Da Boss',
        skill: 'Being da boss',
        type: 'Manager'
    });
    EMS.addEmployee({
        name: 'Da Big Boss',
        skill: 'Firing People',
        type: 'CEO'
    });

    renderView(EMS.getEmployees());
    $('form').addEventListener('submit', onSubmit);
    $('.Employees').addEventListener('click', onClick);


    // Methods
    // *******************************************************

    function onSubmit (e) {
        e.preventDefault();
        EMS.addEmployee(getSerialized(e.target));
        renderView(EMS.getEmployees());
    }

    function onClick (e) {
        var employeeId = getEmployeeId(e.target);
        var action = e.target.dataset.action;
        EMS.runAction(employeeId, action);
        renderView(EMS.getEmployees());
    }

    function getEmployeeId (node) {
        while (node && !node.hasAttribute('data-id')) {
            node = node.parentNode;
        }
        return node.dataset.id;
    }

    function getSerialized (form) {
        var inputs = form.querySelectorAll('[name]');
        var data = {};
        forEach(inputs, function (input) {
            data[input.name] = input.value;
        });
        return data;
    }

    function renderView (data) {
        var source = $('#employee-template').textContent;
        var template = Handlebars.compile(source);
        var employeesHtml = template(data);

        $('.Employees').innerHTML = employeesHtml;
    }

    function $ (selector) {
        return document.querySelector(selector);
    }

    function forEach (list, func) {
        return [].forEach.call(list, func);
    }

}(window.EMS, window.Handlebars));