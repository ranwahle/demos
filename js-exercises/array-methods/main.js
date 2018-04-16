let list = [1, 2, 3, 4];

function forEach(list, method) {
    for (let i = 0; i < list.length; i++) {
        method(list[i]);
    }
}

function filter(list, method) {
    let result = [];
    for (let i = 0; i < list.length; i++) {
        if (Boolean(method(list[i]))) {
            result.push(list[i]);
        };
    }
    return result;
}

function map(list, method) {
    let result = [];
    for (let i = 0; i < list.length; i++) {
        result.push(method(list[i]));
    }
    return result;
}

function reduce(list, method, initialValue) {
    let lastValue = list[0];
    if (typeof initialValue !== 'undefined') {
        lastValue = initialValue;
    }
    for (let i = 0; i < list.length; i++) {
        lastValue = method(lastValue, list[i], i, list);
    }
    return lastValue;
}

forEach(list, function(value) {
    console.log(value);
});

console.log('map', map(list, v => v * 2));

console.log('filter', filter(list, v => v % 2 === 0));

console.log('reduce', reduce(list, (sum, val) => sum + val, 0));