/* globals visitToTimelines, createHashArray, getEndState, VisitFSM */
/* jshint -W098, -W106 */

'use strict';

console.group('RUN');

var isBuildingReport = true;


// USER CODE
// =================================================================
var button = document.querySelector('button');
var output = document.querySelector('output');
var visitInput = document.querySelector('#visit-data');
var nextVisitInput = document.querySelector('#next-visit-data');
var previousVisitInput = document.querySelector('#previous-visit-data');

visitInput.value = localStorage.getItem('visit-data');
nextVisitInput.value = localStorage.getItem('next-visit-data');
previousVisitInput.value = localStorage.getItem('previous-visit-data');

button.addEventListener('click', () => {
  const visitData = JSON.parse(visitInput.value).data;
  const nextVisitData = JSON.parse(nextVisitInput.value).data;
  const previousVisitData = JSON.parse(previousVisitInput.value).data;

  console.time('visitToTimelines');
  const timelineByMachine = visitToTimelines(visitData, nextVisitData || {}, previousVisitData  || {});
  console.timeEnd('visitToTimelines');
  let machinesById = createHashArray(visitData.machines, '_id');

  Object.keys(timelineByMachine).forEach(id => {
    const t = timelineByMachine[id];
    const m = machinesById[id][0];
    console.log(m.name, t);
    const state = getEndState(t, VisitFSM);
    output.innerHTML += `
      <div class="${state}">
        <h2>${m.name}</h2>
        ${getTimelineHtml(t.timeline)}
      </div>
    `;
  });

  localStorage.setItem('visit-data', visitInput.value);
  localStorage.setItem('next-visit-data', nextVisitInput.value);
  localStorage.setItem('previous-visit-data', previousVisitInput.value);

  function getTimelineHtml(timeline) {
    return '<ol>'.concat(timeline.map((e) => {
      return `<li>${e.name} - ${new Date(e.data.created_at)}</li>`;
    }).join('')).concat('</ol>');
  }
});

console.groupEnd('RUN');

