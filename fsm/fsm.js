/* globals isBuildingReport, StateMachine */
/* jshint -W106, -W098 */

'use strict';

/*

-1: 'INVALID'
 0: 'ACCEPTABLE'
 1: 'MONITOR'
 2: 'ALARM'
 3: 'DANGER'

*/

// FSM
// =================================================================
var VisitFSM = {
  events: [
    { name: 'startup',  from: 'none',  to: 'initial' },

    { name: 'repair',  from: 'initial',  to: 'R' },
      { name: 'session', from: 'R', to: 'SR' },
      { name: 'session', from: 'SR', to: 'SSR' },

    { name: 'session',  from: 'initial',  to: 'S' },

      { name: 'session',  from: 'S',  to: 'SS' },
      { name: 'repair',  from: 'SS',  to: 'RSS' },

      { name: 'repair',  from: 'S',  to: 'RS' },
      { name: 'session',  from: 'RS',  to: 'SRS' },

    { name: 'validate',  from: ['R', 'RS', 'SR', 'SSR', 'SRS', 'RSS'],  to: 'validating' },

    { name: 'resolve',  from: ['validating'],  to: 'resolved' },
    { name: 'reject',  from: ['validating'],  to: 'rejected' }
  ],
  callbacks: {
    onstartup: function(e, from, to, visit) {
      var reversed = [...visit.timeline].reverse();
      reversed.forEach((event, index) => {
        this[event.name](visit, event, index);
      });
    },
    onenterstate: function(e, from, to, visit, data, index) {
      if (isLateState(to)) {
        return;
      }

      if (isLastInArray(index, visit.timeline)) {
        this.validate(visit);
      }

      function isLateState(state) {
        return ['rejected', 'resolved', 'validating'].includes(state);
      }
    },
    onvalidating: function(e, from, to, visit) {
      console.log('%cvalidating', 'color: gold', from);
      if (validate(visit, from, isBuildingReport)) {
        this.resolve();
      } else {
        this.reject();
      }
    },
    onresolved: function() {
      console.log('%cRESOLVED!', 'color: lightgreen');
    },
    onrejected: function() {
      console.log('%cREJECTED!', 'color: red');
    }
  }
};

// FUNCTIONS
// =================================================================
function getEndState(visit, machine) {
  var fsm = StateMachine.create(machine);
  try {
    fsm.startup(visit);
  } catch(err) {
    console.warn(err);
    return err;
  }
  return fsm.current;
}

function visitToTimelines(visitData, nextVisitData, previousVisitData) {
  return visitData.machines.reduce(attachTimeline, {});

  function attachTimeline(hash, m) {
    return Object.assign(hash, {
      [m._id]: getMachineTimelines(m, visitData, nextVisitData, previousVisitData)
    });
  }

  function getHashArray(list) {
    return createHashArray(list.map(attachMachineId), 'machineId');
  }

  function getMachineTimelines(m, visitData, nextVisitData, previousVisitData) {
    const timelines = [visitData, nextVisitData, previousVisitData].map(visitData => {
      const repairEvents = (getHashArray(visitData.repairs)[m._id] || []).map(r => toEvent('repair', r));
      const sessionEvents = (getHashArray(visitData.sessions)[m._id] || []).map(s => toEvent('session', s));
      return [...repairEvents, ...sessionEvents].sort(compareEventsTime);
    });
    return {
      timeline: timelines[0],
      next: { timeline: timelines[1] },
      previous: { timeline: timelines[2] }
    };
  }

  function toEvent(name, data) {
    return { name, data };
  }

  function attachMachineId(obj) {
    return Object.assign({}, obj, { machineId: obj.machine.id });
  }
}

function compareEventsTime(e1, e2) {
  if (e1.data.created_at < e2.data.created_at) {
    return -1;
  } else if (e1.data.created_at === e2.data.created_at) {
    return 0;
  } else {
    return 1;
  }
}

function validate(visit, state, isBuildingReport) {
  const current = { first: getFirstSession(visit.timeline), last: getLastSession(visit.timeline) };
  const previous = { last: getLastSession(visit.previous.timeline) };
  const next = { first: getFirstSession(visit.next.timeline) };
  const SSR = 'SSR', SRS = 'SRS', RSS = 'RSS', RS = 'RS', SR = 'SR', R = 'R';

  if (state in {SSR, SRS}      && sessionBetter(current.last, current.first) ||                // V1
      state in {SSR, SRS, RSS} && sessionWorse (previous.last, current.first, current.last) || // V2
      state in {RS, SR}        && sessionBetter(current.first, previous.last)) {               // V4
    return true;
  }

  if (isBuildingReport) { // Can look into the "future"

    if (state in {SSR}    && sessionBetter(next.first, current.first, current.last) || // V3
        state in {RS, SR} && sessionBetter(next.first, current.first) ||               // V5
        state in {R}      && sessionBetter(next.first, previous.last)) {               // V6
      return true;
    }
  }

  return false;
}

function isLastInArray(index, arr) {
  return index === arr.length - 1;
}

function getLastSession(timeline) {
  return getFirstSession([...timeline].reverse());
}

function getFirstSession(timeline) {
  return getSessions(timeline)[0];
}

function getSessions(timeline) {
  return timeline.filter((e) => {
    return e.name === 'session';
  });
}

function sessionBetter(better, ...worse) {
  return worse.every(worse => worse.data.result.level > better.data.result.level);
}

function sessionWorse(worse, ...better) {
  return better.every(better => better.data.result.level < worse.data.result.level);
}

function createHashArray(data, key) {
  return data.reduce((hash, d) => {
    return Object.assign(hash, {
      [d[key]]: Array.isArray(hash[d[key]]) ? hash[d[key]].concat(d) : [d]
    });
  }, {});
}
