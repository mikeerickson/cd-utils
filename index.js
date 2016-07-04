/**
 * index.js
 * Mike Erickson <codedungeon@gmail.com>
 * 2016.05.20 20:54 (mikee)
 * =============================================================================
 */

module.exports = function(params) {

	var utils = require('./src/cd-utils')(params || {});

	var module = {
		version: function() {
			return require('./package').version;
		},
		name: function() {
			return require('./package').name;
		},
		notifyOptions:  utils.notifyOptions,
		failMessage:    utils.failMessage,
		passMessage:    utils.passMessage,
		notifyPassed:   utils.notifyPassed,
		notifyFailed:   utils.notifyFailed,
		error:          utils.error,
		info:           utils.info,
		success:        utils.success,
		warning:        utils.warning,
		is:             utils.is,
		chalk:          utils.chalk,
		isWindows:      utils.isWindows,
		isOSX:          utils.isOSX,
		isLinux:        utils.isLinux,
		platform:       utils.platform,
		mergeTemplate:  utils.mergeTemplate,
		timestamp:      utils.timestamp,
		difference:     utils.difference,
		params:         utils.params,
		param:          utils.param,
		args:           utils.params,
		arg:            utils.param,
		padLeft:        utils.padLeft,
		padStart:       utils.padLeft,
		padCenter:      utils.padCenter,
		padRight:       utils.padRight,
		padEnd:         utils.padRight,
		readFile:       utils.readFile,
		removeDir:      utils.removeDir,
		removeFile:     utils.removeFile,
		createDir:      utils.createDir,
		mkdir:          utils.createDir,
		ellipsis:       utils.ellipsis,
		extend:         utils.extend,
		dates:          utils.dates,
		sprintf:        utils.sprintf,
		vsprintf:       utils.vsprintf,
		pluralize:      utils.pluralize,

	}

	return module;

}
