// CD-UTILS INDEX
// =============================================================================

/*global require*/

module.exports = function(params) {

	var utils = require('./src/cd-utils')(params || {});

	var module = {
		version: function() {
			return require('./package').version;
		},
		notifyOptions: utils.notifyOptions,
		failMessage:   utils.failMessage,
		passMessage:   utils.passMessage,
		notifyPassed:  utils.notifyPassed,
		notifyFailed:  utils.notifyFailed,
		error:         utils.error,
		info:          utils.info,
		success:       utils.success,
		warning:       utils.warning,
		is:            utils.is,
		chalk:         utils.chalk,
		isWindows:     utils.isWindows,
		isOSX:         utils.isOSX,
		isLinux:       utils.isLinux,
		platform:      utils.platform,
		mergeTemplate: utils.mergeTemplate,
		timestamp:     utils.timestamp,
		difference:    utils.difference,
		params:        utils.params,
		param:         utils.param,
		padLeft:       utils.padLeft,
		padStart:      utils.padLeft,
		padCenter:     utils.padCenter,
		padRight:      utils.padRight,
		padEnd:        utils.padRight,
		readFile:      utils.readFile,
	}

	return module;

}
