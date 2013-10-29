/**
 * Here we initialise the whole Angular App, especially the routing.
 */
define(['angular'], function () {

  var app;

  var initialize = function () {

    app = angular.module('app', []);

    app.value('version', '0.1');

    app.directive('appVersion', ['version', function (version) {
      return function (scope, elm) {
        elm.text(version);
      };
    }]);

    app.controller('Test', function($scope, version){
      $scope.version = version;
    })

    return app;
  };

  var start = function () {
    angular.element(document).ready(function () {
      // Because of RequireJS we need to bootstrap the app manually
      // and Angular Scenario runner won't be able to communicate with our app
      // unless we explicitly mark the container as app holder
      // More info: https://groups.google.com/forum/#!msg/angular/yslVnZh9Yjk/MLi3VGXZLeMJ
      // If you don't use angular e2e scenario runner then you don't need this workaround
      var el = document.querySelector('body');
      angular.bootstrap(angular.element(el).addClass('ng-app'), [app['name']]);

      http://stackoverflow.com/questions/15499997/how-to-use-angular-scenario-with-requirejs
      el.dataset.ngApp = 'app';
      if (top !== window) {
        window.parent.postMessage({
          type: 'loadamd'
        }, '*');
      }
    });
  };

  return {
    initialize: initialize,
    start: start
  };
});
