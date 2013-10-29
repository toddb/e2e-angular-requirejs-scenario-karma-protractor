/*global module:false*/
module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9001,
          base: 'client',
          keepalive: true,
          open: true
        }
      }
    },
    karma: {
      unit: {
        configFile: 'tests/karma/e2e.conf.js'
      }
    },
    protractor: {
      e2e: {
        configFile: "tests/protractor/e2e.conf.js",
        keepAlive: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-karma');

  // Does a basic build.
  grunt.registerTask('default', ['connect']);


};