let consts = {
  doubleClickTimeout: 200
};

function cancelOnDoubleClick(fn) {
  const RESPONSE_DELAY = consts.doubleClickTimeout;
  let timer;
  let now = Date.now();
  let key = String(fn);
  console.log(`XXXX entered waiting ${RESPONSE_DELAY}ms`);

  if (!cancelOnDoubleClick.hash) {
    cancelOnDoubleClick.hash = {};
  }
  let hashed = cancelOnDoubleClick.hash[key];
  if (!hashed) {
    hashed = cancelOnDoubleClick.hash[key] = fn;
  }

  if (!hashed.isClicked) {
    hashed.isClicked = true;
    timer = setTimeout(() => {
      console.log('XXXX', 'calling method', String(key), `passed ${Date.now() - now}ms`);
      hashed();
      delete cancelOnDoubleClick.hash[key];
    }, RESPONSE_DELAY);
  } else {
    console.log('XXXX', 'clearing timeout');
    clearTimeout(timer);
    delete cancelOnDoubleClick.hash[key];
  }
}

describe('cancelOnDoubleClick', function() {
  let originalDelay = consts.doubleClickTimeout;
  beforeAll(function() {
    consts.doubleClickTimeout = 50;
  });
  afterAll(function() {
    consts.doubleClickTimeout = originalDelay;
  });

  it('should cancel on double click', function(done) {
    let mock = jasmine.createSpy('cancel mock');
    let now = Date.now();
    let fasterDelay = consts.doubleClickTimeout - 20;

    cancelOnDoubleClick(mock);
    console.log(`@@@@ waiting fasterDelay ${fasterDelay}ms`);
    setTimeout(() => {
      console.log('@@@@', 'call cancel 2nd time', `passed ${Date.now() - now}ms`);
      cancelOnDoubleClick(mock);
      expect(mock).not.toHaveBeenCalled();
      done();
    }, fasterDelay);
  });

  it('should run after delay', function(done) {
    let mock = jasmine.createSpy('run mock');
    let now = Date.now();
    let slowerDelay = consts.doubleClickTimeout + 20;
    cancelOnDoubleClick(mock);
    console.log(`@@@@ waiting slowerDelay ${slowerDelay}ms`);
    setTimeout(() => {
      console.log('@@@@', 'expecting to be have been run', `passed ${Date.now() - now}ms`);
      expect(mock).toHaveBeenCalled();
      done();
    }, slowerDelay);
  });
});