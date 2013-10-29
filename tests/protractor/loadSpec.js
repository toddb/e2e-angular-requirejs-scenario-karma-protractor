describe('Test Application - async loader', function () {
  var ptor;
  beforeEach(function () {
    ptor = protractor.getInstance();
    ptor.get('/');
  });

  it('should display text', function () {
    var greeting = ptor.findElement(
        protractor.By.css("body>div"));

    expect(greeting.getText()).toContain("test app: v");
  });

  it('should show version', function () {
    var greeting = ptor.findElement(
        protractor.By.css("body>div"));
    expect(greeting.getText()).toContain("0.1");
  });
});
