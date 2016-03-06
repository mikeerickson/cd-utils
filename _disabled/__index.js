// CD-UTILS
// =============================================================================

/*global require*/

(function() {

  'use strict';

  var _         = require('lodash');
  var notify    = require('gulp-notify');
  var moment    = require('moment');
  var paramsObj = require('yargs').argv;

  var is_js     = require('is_js');
  var chalkline = require('chalkline');
  var chalk     = require('chalk');

  var argv = require('minimist')(process.argv.slice(2));
  console.dir(argv);

  var showNotification = false;

  module.exports = {

    notifyOptions: function(status, override) {
      var options = {
        taskName: 'Task',
        title:    ( status === 'pass') ? 'Passed' : 'Failed',
        message:  ( status === 'pass' ) ? '<%= taskName %> Completed Successfully' : '<%= taskName %> Failed',
        icon:     './assets/test-' + status + '.png'
      };

      var newOptions     = _.merge(options, override);
      newOptions.message = _.template(newOptions.message)(newOptions);
      return newOptions;

    },

    failMessage: function(options) {
      if ( showNotification ) {
        return this.notifyOptions('fail', options);
      }
    },

    passMessage: function(options) {
      if ( showNotification ) {
        return this.notifyOptions('pass', options);
      }
    },

    notifyPassed: function(options) {
      if ( showNotification ) {
        return notify(this.notifyOptions('pass', options));
      }
    },

    notifyFailed: function(options) {
      if ( showNotification ) {
        return notify.onError((this.notifyOptions('fail', options)));
      }
    },

    error: function(msg) {
      var error = chalk.bold.red;
      return error(msg);
    },

    info: function(msg, data) {
      var tmp = this.mergeTemplate(msg, data);
      return chalk.blue(tmp);
    },

    success: function(msg, data) {
      var success = chalk.green;
      var tmp = this.mergeTemplate(msg, data);
      return success(tmp);
    },

    warning: function(msg, data) {
      var warning = chalk.yellow;
      var tmp = this.mergeTemplate(msg, data);
      return warning(tmp);
    },

    mergeTemplate: function(msg, data) {
      if (data) {
        var compiled = _.template(msg);
        return(compiled(data));
      }
      return msg;
    },

    isWindows: function() {
      return /^win/.test(process.platform);
    },

    timestamp: function() {
      return moment().format('YYYY-DD-MM h:mm:ss:SS');
    },

    difference: function(start, end) {
      return moment.utc(moment(end,"DD/MM/YYYY HH:mm:ss:SS").diff(moment(start,"DD/MM/YYYY HH:mm:ss:SS"))).format("HH:mm:ss:SS");
    },

    params: function() {
      return paramsObj;
    },

    param: function(paramName) {
      return paramsObj ? paramsObj[paramName] : null;
    },

    // expose some useful utils
    is:        is_js,
    chalk:     chalk,
    chalkline: chalkline

  };

}());

