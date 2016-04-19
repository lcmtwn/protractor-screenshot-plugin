describe('screenshot plugin (take on all cases)', function() {
  beforeAll(function() {
    browser.get('/');
  });

  it('pass case', function() {
    expect($('#first').getText()).toBe('Hello');
  });

  it('fail case', function() {
    expect($('#second').getText()).toBe('world');
  });
})
