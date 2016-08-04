/**
 * handleErrors.js
 * Mike Erickson <codedungeon@gmail.com>
 * 2016.05.20 20:50 (mikee)
 * =============================================================================
 */

var notify = require('gulp-notify');
var chalk  = require('chalk');
var config = {
	show: true
};

module.exports = function (config) {

	var args = Array.prototype.slice.call(arguments);

	// Send error to notification center with gulp-notify

	if ( config.show ) {
		notify.onError({
			title: 'Compile Error',
			message: '<%= error %>'
		}).apply(this, args);
	} else {
		console.log(chalk.red('An error occurred during task processing'));
	}

	// Keep gulp from hanging on this task
	this.emit('end');
};
