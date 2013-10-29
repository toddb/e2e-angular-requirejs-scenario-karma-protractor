# Angular with requirejs AMD loading project structure for e2e testings via scenario/karma vs protractor

This is a sample project for seeing how to run e2e tests. The biggest difficulty is timing around the AMD loading.

The sample app is simple. It loads a `version` onto the screen via angular service injection. This is enough to prove AMD timing issues.
Results:

 - DON'T use `karma` and `scenario` - I still couldn't get it to work but reckon it could be fixed - the code waits and loads but somewhere the targeting of the `element` is wrong and needs to be fixed
 - Protractor was successful and easily implemented

Thoughts:

 - both can integrate with Angular
 - scenario obviously requires Angular, so protractor is more generalised (good)
 - both are interprocess communication
 - selenium/webdriver are maintained and extended by others (good)
 - both have `grunt` runners

## Installation

```shell
sudo npm install -d grunt karma bower
npm install
bower install
node_modules/protractor/bin/install_selenium_standalone
```

## Running the site

If you want to see how little it does. Run below to start up the server and load up a browser:

```shell
grunt
```

## Testing

### Running via Karma

These tests fail. You noticed that there is a `pause` in the second test. This shows how the loader timing is fine. If you remove the `ng-scenario-require.js` from the `e2e.conf.js` then one test will pass but the AMD loading doesn't happen in time.

```shell
grunt karma
```

### Running via Protractor

These tests all pass.

```shell
grunt protractor
```