describe('Test Application - async loader', function () {
  beforeEach(function () {
    browser.get('/');
  });

  it('should display text', function () {
    var greeting = element(by.css("body>div"));
    expect(greeting.getText()).toContain("test app: v");
  });

  it('should show version', function () {
    var greeting = element(by.css("body>div"));
    expect(greeting.getText()).toContain("0.1");
  });
});
