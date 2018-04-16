'use strict';

let data = [];

class Employee {
    constructor(props) {
        this.name = props.name;
        this.skill = props.skill;
        this.lastCheckIn = '';
    }
    checkIn() {
        this.lastCheckIn = new Date();
    }
    getActions() {
        return [{ name: 'Check in', id: 'checkIn' }];
    }
}

class Manager extends Employee {
    constructor(props) {
        super(props);
    }
    sayYo() {
        console.log(`I'm da boss!`);
    }
    getActions() {
        return super.getActions().concat([{ name: 'Say Yo', id: 'sayYo' }]);
    }
}

class CEO extends Employee {
    constructor(props) {
        super(props);
    }
    fireEveryone() {
        data.length = 0;
    }
    getActions() {
        return super.getActions().concat([{ name: 'Fire Everyone', id: 'fireEveryone' }]);
    }
}

function addEmployee(employee) {
    let e;
    switch(employee.type) {
        case 'Manager':
            e = new Manager(employee);
            break;
        case 'CEO':
            e = new CEO(employee);
            break;
        default:
            e = new Employee(employee);
    }
    data.push(e);
    e.id = data.length.toString();
    console.log(e.getActions());
}

function runAction(id, action) {
    let e = getById(id);
    if (!action || !e.getActions().some(a => a.id === action)) {
        throw 'Action is not supported';   
    }
    return e[action]();
}

function getAll() {
    return data.slice();
}

function getById(id) {
    return data.find(e => e.id === id);
}