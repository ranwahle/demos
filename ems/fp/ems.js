/* globals alert  */
/* jshint -W086 */

'use strict';

(function (global) {

    var EMS = global.EMS || {};

    var data = {
        employees: []
    };

    var actions = {
        checkIn: function () {
            this.lastCheckIn = (new Date()).toString();
        },
        sayYo: function () {
            console.log('Yo, I\'m ' + this.name);
        },
        fireEveryone: function () {
            alert('Booo');
        }
    };

    EMS.runAction = function (employeeId, action) {
        var employee = this.getEmployeeById(employeeId);
        if (indexOf(employee.actions, 'id', action) === -1) {
            throw new Error('Action not supported for employee type');
        }
        return actions[action].call(employee);
    };

    EMS.getEmployeeById = function (id) {
        return data.employees[id - 1];
    };

    EMS.getEmployees = function () {
        return data;
    };

    EMS.addEmployee = function (employee) {
        employee.id = data.employees.length + 1;
        employee.actions = [];
        switch (employee.type) {
            case 'CEO':
                employee.actions.push({id: 'fireEveryone', name: 'Fire Everyone'});
            case 'CEO':
            case 'Manager':
                employee.actions.push({id: 'sayYo', name: 'Say Yo'});
            default:
                employee.actions.push({id: 'checkIn', name: 'Check In'});
        }
        data.employees.push(employee);
    };

    function indexOf (arr, key, value) {
        var ret = -1;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i][key] === value) {
                ret = i;
            }
        }
        return ret;
    }


    global.EMS = EMS;

}(window));