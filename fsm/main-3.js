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
    { name: 'session',  from: 'empty',  to: '1session' },
    { name: 'session',  from: '1session',  to: '2sessions' }
  ],
  callbacks: {
    onenterSSR: function(e, from, to, timeline, data) {
      if (sessionImproved(timeline[0].data, timeline[1].data)) {
        this.resolve();
      } else {
        this.reject();
      }
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
  var reversed = [...timeline].reverse();
  reversed.forEach((event, index) => {
    fsm[event.name](timeline, event.data);
  });
} catch(err) {
  console.warn(err);
}

function sessionImproved(s1, s2) {
  return s2.result.level < s1.result.level;
}
