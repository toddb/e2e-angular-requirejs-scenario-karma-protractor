/*global browser sleep element describe beforeEach afterEach it expect using */

describe('Test Application - async loader', function () {
  beforeEach(function () {
    browser().navigateTo('/');
  });

  it('should display text', function () {
    expect(element("body>div").text()).toContain("test app: v");
  });

  it('should show version', function () {
    pause();
    expect(element("body>div").val()).toContain("0.1");
  });

});
