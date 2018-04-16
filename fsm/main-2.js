/* globals StateMachine */
/* jshint -W098 */

'use strict';

/*

-1: 'INVALID'
 0: 'ACCEPTABLE'
 1: 'MONITOR'
 2: 'ALARM'
 3: 'DANGER'

*/

var timeline = [
  { name: 'session', data: {result: {level: 3}} },
  { name: 'session', data: {result: {level: 4}} },
  { name: 'repair', data: {date: new Date()} }
];

var fsm = StateMachine.create({
  initial: 'empty',
  events: [
    { name: 'repair',  from: 'empty',  to: 'R' },
    { name: 'session', from: 'R', to: 'SR' },
    { name: 'session', from: 'SR', to: 'SSR' },
    { name: 'resolve', from: 'SSR', to: 'resolved' },
    { name: 'reject', from: 'SSR', to: 'rejected' }
  ],
  callbacks: {
    onenterstate: function(e, from, to, timeline, data) {
      console.log('%conenterstate (debug)', 'color: hotpink', to, '=>', from, e, data);
    },
    onleavestate: function(e, from, to, timeline, data) {
      console.log('%conleavestate (debug)', 'color: purple', from, '=>', to, e, data);
    },
    onenterSSR: function(e, from, to, timeline, data) {
      console.log('%conenterstate', 'color: hotpink', to, '=>', from, e, data);
      var event = sessionImproved(timeline[0].data, timeline[1].data) ? 'resolve': 'reject';
      this[event]();
    },
    onenterresolved: function() {
      console.log('%cRESOLVED!', 'color: lightgreen');
    },
    onenterrejected: function() {
      console.log('%cREJECTED!', 'color: red');
    }
  }
});

try {
  applyTimeline(fsm, timeline);
} catch(err) {
  console.warn(err);
}

function applyTimeline(fsm, timeline) {
  var reversed = [...timeline].reverse();
  reversed.forEach((event, index) => {
    fsm[event.name](timeline, event.data);
  });
}

function sessionImproved(s1, s2) {
  return s2.result.level < s1.result.level;
}
