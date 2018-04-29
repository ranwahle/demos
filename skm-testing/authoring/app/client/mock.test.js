describe("A spy, when configured to fake a return value", function() {
  let mock;

  beforeEach(function() {
    mock = {
      doSomething() {}
    };
    spyOn(mock, 'doSomething').and.returnValue(123);
  });

  it("when called returns the requested value", function() {
    expect(mock.doSomething()).toEqual(123);
  });
});