// StrmanSpec.js
// =============================================================================

/* eslint no-undef:0*/
/* eslint no-unused-vars:0*/

var utils  = require('../index')();
var expect = require('chai').expect;
var should = require('chai').should();
var msg    = require('gulp-messenger');

require('mocha-sinon');

describe('test string routines', function() {

	var result = '';

	xit('should test error output', function(done) {
		result = utils.error('error message');
		expect( utils.error.calledOnce ).to.be.true;
		expect( utils.error.calledWith('error message') ).to.be.true;
		done();
	});

	xit('should test success output', function(done){
		result = utils.success('success message');
		expect( utils.success.calledOnce ).to.be.true;
		expect( utils.success.calledWith('success message'));
		done();
	});

	xit('should test info output', function(done){
		result = utils.info('info message');
		expect( utils.info.calledOnce ).to.be.true;
		expect( utils.info.calledWith('info message'));
		done();
	});
});


