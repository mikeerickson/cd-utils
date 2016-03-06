// CD-UTILS INDEX
// =============================================================================

/*global require*/

module.exports = function(params) {

	var utils = require('./src/cd-utils')(params || {});

	var module = {
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
		mergeTemplate: utils.mergeTemplate,
		timestamp:     utils.timestamp,
		difference:    utils.difference,
		params:        utils.params,
		param:         utils.param,
	}
	
	function showTheLog(msg) {
		console.log(msg);
		return msg;
	}
	
	function showHello(msg) {
		return utils.sayHello(msg);
	}
	
	return module;
	
}
