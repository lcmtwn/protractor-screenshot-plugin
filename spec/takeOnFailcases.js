describe('screenshot plugin (take on fail cases)', function() {
  beforeAll(function() {
    browser.get('/');
  });

  it('fail case', function() {
    expect($('#first').getText()).toBe('hello');
  });

  it('pass case', function() {
    expect($('#second').getText()).toBe('World');
  });
})
