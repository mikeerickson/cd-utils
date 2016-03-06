// CD-UTILS
// =============================================================================

/*global require*/

var _         = require('lodash');
var defaults  = require('defaults');
var is        = require('is_js');
var moment    = require('moment');
var chalk     = require('chalk');
var chalkline = require('chalkline');
var paramsObj = require('yargs').argv;

console.log('paramObj', paramsObj);

module.exports = function (opts) {

	var defaultOptions = {
		showNotification: false
	}

	var options = defaults(defaultOptions, opts);

	var module = {
		
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
			if ( options.showNotification ) {
				return this.notifyOptions('fail', options);
			}
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

		is: is,
		chalk: chalk,
		chalkline: chalkline,
		isWindows: function() {
			return /^win/.test(process.platform);
		},
		mergeTemplate: function(msg, data) {
			if (data) {
				var compiled = _.template(msg);
				return(compiled(data));
			}
			return msg;
		},
		timestamp: function() {
			return moment().format('YYYY-DD-MM h:mm:ss:SS');
		},
		params: function() {
			return paramsObj;
		},
		difference: function(start, end) {
			return moment.utc(moment(end,"DD/MM/YYYY HH:mm:ss:SS").diff(moment(start,"DD/MM/YYYY HH:mm:ss:SS"))).format("HH:mm:ss:SS");
		},
		param: function(paramName) {
			return paramsObj ? paramsObj[paramName] : null;
		},
	};

	function sayHello(msg) {
		console.log('Hello ' + msg);
	}



	return module;
};
