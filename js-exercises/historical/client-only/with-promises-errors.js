'use strict';

window.addEventListener('error', onWindowError);
window.addEventListener('unhandledrejection', onPromiseError);

const URL = 'ancestry.json';

request(URL)
    .then(onAncestryData)
    .catch(err => {
        displayError(`Something went wrong while loading <code>${URL}</code>`);
        console.error(`Error loading file [error=${err}]`);
    });

function displayError(message, delay = 3000) {
    let error = document.createElement('div');
    error.classList.add('error');
    error.innerHTML = message;
    document.body.appendChild(error);
    setTimeout(() => {
        error.remove();
    }, delay);
}

function onWindowError(e) {
    e.preventDefault();
    console.error(`Caught on window [message=${e.message}]`);
}

function onPromiseError(e) {
    e.preventDefault();
    console.error(`Caught in Promise [message=${e.reason}]`);
}

function onAncestryData(ancestry) {
    document.body.appendChild(barChart({
        title: 'Historical Life Expectancy',
        label: v => `${withSuffix(v)} Century`,
        series: getHistoricalAverage(ancestry),
        percent: v => (v / 130) * 100
    }));

    document.body.appendChild(barChart({
        title: 'Age of Death Histogram',
        label: v => `Died at his ${v}0s`,
        series: getDiedHistogram(ancestry),
        percent: (v, series) => {
            let total = sum(Array.from(series.values()));
            return (v / total) * 100;
        }
    }));
}

function getHistoricalAverage(ancestry) {
    let diedAge = person => person.died - person.born;
    let century = person => Math.ceil(person.died / 100);
    let grouped = groupBy(ancestry, century);
    return groupReduce(grouped, average, diedAge);
}


function getDiedHistogram(ancestry) {
    let diedAge = person => person.died - person.born;
    let decade = person => Math.floor(diedAge(person) / 10);
    let grouped = groupBy(ancestry, decade);
    return groupReduce(grouped, count, v => v);
}

function groupReduce(group, method, normalize) {
    return keys(group).reduce((hash, key) => {
        hash.set(key, method(group.get(key).map(normalize)));
        return hash;
    }, new Map());
}

function count(list) {
    return list.length;
}

function average(list, precision = 1) {
    return (sum(list) / list.length).toFixed(precision);
}

function sum(list) {
    return (list.reduce((sum, val) => sum + val));
}

function keys(map) {
    return Array.from(map.keys());
}

function withSuffix(ordinal) {
    let right = String(ordinal).split('').pop();
    switch (right) {
        case '1':
            return `${ordinal}st`;
        case '2':
            return `${ordinal}nd`;
        case '3':
            return `${ordinal}rd`;
        default:
            return `${ordinal}th`;
    }
}

function barChart({title, label, series, percent}) {
    let barChart = document.createElement('div');
    barChart.classList.add('BarChart');
    barChart.innerHTML = `
        <h2 class="BarChart-title">${title}</h2>
        <dl class="BarChart-graph">
            ${keys(series).sort((a, b) => a - b).map(bar).join('')}
        </dl>
    `;
    return barChart;

    function bar(category) {
        let color = getColor(category);
        let value = series.get(category);
        return `
            <dt class="BarChart-category">${label(category)}</dt>
            <dd class="BarChart-value">
                <data style="width: ${percent(value, series)}%;" class="bg-${color.bg} ${color.text}">${value}</data>
            </dd>
        `;
    }

    function getColor(category) {
        let colors = [
            {bg: 'yellow', text: 'navy'},
            {bg: 'fuchsia', text: 'white'},
            {bg: 'orange', text: 'black'},
            {bg: 'maroon', text: 'white'},
            {bg: 'red', text: 'white'},
            {bg: 'aqua', text: 'navy'}
        ];
        if (!getColor.index) {
            getColor.index = 0;
        }
        return colors[(getColor.index++) % colors.length];
    }
}

function groupBy(list, method) {
    let hash = new Map();
    for (let value of list) {
        let key = method(value);
        if (hash.get(key)) {
            hash.get(key).push(value);
            continue;
        }
        hash.set(key, [value]);
    }
    return hash;
}

function request(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.addEventListener('load', e => {
            if (e.target.status > 200) {
                reject(e.target.statusText);
            }
            try {
                resolve(JSON.parse(e.target.responseText));
            } catch (err) {
                reject(err);
            }
        });
        xhr.addEventListener('error', e => reject(e.target.statusText || 'Network Error'));
        xhr.addEventListener('abort', e => reject(e.target.statusText || 'Network Error'));
        xhr.send();
    });
}