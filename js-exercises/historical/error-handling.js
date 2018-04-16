'use strict';

window.addEventListener('error', onWindowError);

loadFile('ancestry.json', onAncestryData, onError);

function onWindowError(e) {
    e.preventDefault();
    console.error(`Caught [error=${e.message}]`);
}

function onError(err) {
    console.error(`Caught [error=${err}]`);
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
        label: v => `Died at age ${v}`,
        series: getDiedHistogram(ancestry),
        percent: (v, series) => Math.ceil((v / series.size) * 100)
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
    let grouped = groupBy(ancestry, diedAge);
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
            return `${ordinal}3d`;
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

function loadFile(url, successCallback, errorCallback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', e => {
        if (e.target.status > 200) {
            errorCallback(e.target.statusText);
            return;
        }
        try {
            let data =  JSON.parse(e.target.responseText);
            successCallback(data.ANCESTRY_FILE);
        } catch(err) {
            errorCallback(err);
        }
    });
    xhr.addEventListener('error', err => errorCallback(err.message || 'Network Error'));
    xhr.send();
}