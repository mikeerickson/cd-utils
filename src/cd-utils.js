// CD-UTILS
// =============================================================================

/*global require*/

var _         = require('lodash');
var defaults  = require('defaults');
var is        = require('is_js');
var fs        = require('fs');
var moment    = require('moment');
var chalk     = require('chalk');
var chalkline = require('chalkline');
var paramsObj = require('yargs').argv;
var notifier  = require('node-notifier');

module.exports = function (opts) {

	var defaultOptions = {
		showNotification: false
	}
	var moduleOptions = defaults(opts, defaultOptions);

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
			if ( moduleOptions.showNotification ) {
				return this.notifyOptions('fail', options);
			}
			return null;
		},

		passMessage: function(options) {
			if ( moduleOptions.showNotification ) {
				return this.notifyOptions('pass', options);
			}
		},

		notifyFailed: function(options) {
			if ( moduleOptions.showNotification ) {
				return notifier.notify((this.notifyOptions('fail', options)));
			}
		},

		notifyPassed: function(options) {
			if ( moduleOptions.showNotification ) {
				return notifier.notify(this.notifyOptions('pass', options));
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

		isWindows: function() {
			return /^win/.test(process.platform);
		},

		isOSX: function() {
			return /^darwin/.test(process.platform);
		},

		isLinux: function() {
			return /^linux/.test(process.platform);
		},

		platform: function() {
			return process.platform;
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

		difference: function(start, end) {
			return moment.utc(moment(end,"DD/MM/YYYY HH:mm:ss:SS").diff(moment(start,"DD/MM/YYYY HH:mm:ss:SS"))).format("HH:mm:ss:SS");
		},

		params: function() {
			return paramsObj;
		},

		param: function(paramName) {
			if((!is.object(paramsObj)) || (!is.string(paramName)) || (!paramsObj.hasOwnProperty(paramName))) {
				return null;
			}
			return paramsObj ? paramsObj[paramName] : null;
		},

		padCenter: function(msg, width, padding) {
			var padStr = padding || ' ';
			return _.pad(msg , width, padStr);
		},

		padLeft: function(msg, width, padding) {
			var padStr = padding || ' ';
			return _.padStart(msg , width, padStr);
		},

		padRight: function(msg, width, padding) {
			var padStr = padding || ' ';
			return _.padEnd(msg , width, padStr);
		},

		readFile: function(filename, returnType) {
			var result = fs.readFileSync(filename, 'utf8');
			if ( typeof(returnType) !== 'undefined') {
				switch (returnType) {
					case 'json':
						return JSON.parse(result);
						break;
				}
			}
			return result;
		},

		// some useful modules that are used on most projects
		is: is,
		chalk: chalk,
		chalkline: chalkline,

	};

	return module;
};
