/* jshint -W117, -W106 */

'use strict';

console.group('TEST');

var RSS = {
  previous: {
    timeline: [{ name: 'session', data: {result: {level: 4}} }]
  },
  timeline: [
    { name: 'repair', data: {date: new Date()} },
    { name: 'session', data: {result: {level: 2}} },
    { name: 'session', data: {result: {level: 3}} }
  ],
  next: {
    timeline: [{ name: 'session', data: {result: {level: 3}} }]
  }
};

console.assert(getLastSession(RSS.previous.timeline) === RSS.previous.timeline[0], 'getLastSession');
console.assert(getFirstSession(RSS.timeline) === RSS.timeline[1], 'getFirstSession');
console.assert(isLastInArray(2, RSS.timeline), 'isLastInArray');
console.assert(sessionBetter(RSS.timeline[2].data, RSS.timeline[1].data), 'sessionImproved');
console.assert(getEndState(RSS, VisitFSM) === 'resolved', 'VisitFSM');

var SRSS = {
  previous: {
    timeline: [{ name: 'session', data: {result: {level: 2}} }]
  },
  timeline: [
    { name: 'session', data: {result: {level: 4}} },
    { name: 'repair', data: {date: new Date()} },
    { name: 'session', data: {result: {level: 3}} },
    { name: 'session', data: {result: {level: 4}} }
  ],
  next: {
    timeline: [{ name: 'session', data: {result: {level: 3}} }]
  }
};

try {
  getEndState(SRSS, VisitFSM);
} catch(err) {
  console.assert(Boolean(err), 'More than 2 sessions are not allowed');
}

var V1mock = {
  previous: {
    timeline: [{ name: 'session', data: {result: {level: 2}} }]
  },
  timeline: [
    { name: 'session', data: {result: {level: 3}} },
    { name: 'session', data: {result: {level: 2}} },
    { name: 'repair', data: {date: new Date()} }
  ],
  next: {
    timeline: [{ name: 'session', data: {result: {level: 3}} }]
  }
};

console.assert(validate(V1mock, 'SSR', false) === true, 'V1');

var V2mock = {
  previous: {
    timeline: [{ name: 'session', data: {result: {level: 4}} }]
  },
  timeline: [
    { name: 'session', data: {result: {level: 3}} },
    { name: 'session', data: {result: {level: 3}} },
    { name: 'repair', data: {date: new Date()} }
  ],
  next: {
    timeline: [{ name: 'session', data: {result: {level: 3}} }]
  }
};

console.assert(validate(V2mock, 'SSR', false) === true, 'V2');

var V3mock = {
  previous: {
    timeline: [{ name: 'session', data: {result: {level: 4}} }]
  },
  timeline: [
    { name: 'session', data: {result: {level: 3}} },
    { name: 'session', data: {result: {level: 3}} },
    { name: 'repair', data: {date: new Date()} }
  ],
  next: {
    timeline: [{ name: 'session', data: {result: {level: 2}} }]
  }
};

console.assert(validate(V3mock, 'SSR', true) === true, 'V3');

var V4mock = {
  previous: {
    timeline: [{ name: 'session', data: {result: {level: 4}} }]
  },
  timeline: [
    { name: 'session', data: {result: {level: 3}} },
    { name: 'repair', data: {date: new Date()} }
  ],
  next: {
    timeline: [{ name: 'session', data: {result: {level: 2}} }]
  }
};

console.assert(valide(V4mock, 'SR', false) === true, 'V4');

var V5mock = {
  previous: {
    timeline: [{ name: 'session', data: {result: {level: 4}} }]
  },
  timeline: [
    { name: 'session', data: {result: {level: 3}} },
    { name: 'repair', data: {date: new Date()} }
  ],
  next: {
    timeline: [{ name: 'session', data: {result: {level: 2}} }]
  }
};

console.assert(v5(V5mock) === true, 'V5');

var V6mock = {
  previous: {
    timeline: [{ name: 'session', data: {result: {level: 4}} }]
  },
  timeline: [
    { name: 'repair', data: {date: new Date()} }
  ],
  next: {
    timeline: [{ name: 'session', data: {result: {level: 2}} }]
  }
};

console.assert(v6(V6mock) === true, 'V6');

var mockE1 = {data:{created_at: 1}};
var mockE2 = {data:{created_at: 2}};
var mockE3 = {data:{created_at: 2}};
console.assert(compareEventsTime(mockE1, mockE2) === -1, 'compareEvents lt');
console.assert(compareEventsTime(mockE2, mockE3) === 0, 'compareEvents eq');
console.assert(compareEventsTime(mockE2, mockE1) === 1, 'compareEvents gt');

var machinesTimelines = visitToTimelines(mockVisitData.data, mockNextVisitData.data, mockPreviousVisitData.data);
Object.keys(machinesTimelines).forEach(k => {
  const mockVisitTimeline = machinesTimelines[k];
  if (k === '57151a37a652bb0001000136') {
    console.assert(mockVisitTimeline.timeline.length === 1, 'visitToTimeline length');
  } else if (k === '573c12f3b0a6190001000223') {
    console.assert(mockVisitTimeline.timeline.length === 3, 'visitToTimeline length');
  }
  mockVisitTimeline.timeline.forEach((e) => {
    console.assert(e.name === 'session' || e.name === 'repair', 'visitToTimeline event.name');
  });
  console.assert(mockVisitTimeline.timeline.reduce((res, e, i, arr) => {
    if (!res) {
      return res;
    }
    return arr[i + 1] ? compareEventsTime(e, arr[i + 1]) === -1 : true;
  }, true), 'visitToTimeline sorting');
});


console.group('TODO');

console.assert(false, 'implement next and prev');
console.assert(false, 'implement array of visits (building)');
console.assert(false, 'implement get visit(s) data in the report');
console.assert(false, 'implement attach the bad session on the repair');
console.assert(false, 'implement timeline to possible timelines');
console.assert(false, 'implement improve validate waterfall');
console.assert(false, 'check if still need reverse');

console.group('TODO');

console.groupEnd('TEST');
